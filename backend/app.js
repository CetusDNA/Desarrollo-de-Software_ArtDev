const createError = require('http-errors');
const express = require('express');
const path = require('path');
var cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const privateKey = fs.readFileSync('env/private.key');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const rutasProtegidas = express.Router(); 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const validarRouter = require('./routes/validar');
const administracionRouter = require('./routes/administracion');
const ProductoRouter = require('./routes/productos');
const VentasRouter = require('./routes/ventas');

const app = express();


//token validar
rutasProtegidas.use((req, res, next) => {
const token = req.headers['access-token'];



  if (token) {
    jwt.verify(token, app.get('llave'), (err, decoded) => {      
      if (err) {
        return res.json({ mensaje: 'Token inválida',estado : 0 });    
      } else {
        req.query = decoded; 
        next();
      }
    });
  } else {
    res.json({ 
        mensaje: 'Token no proveída.' ,
        estado: 0
    });
  }
});
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set("llave", privateKey)
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/validate', validarRouter);
app.use('/administracion', administracionRouter);
app.use('/productos', ProductoRouter);
app.use('/ventas', VentasRouter);



app.use(rutasProtegidas)
app.use('/', indexRouter);




console.log(app.get("llave"))




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(301));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err)
  res.json('HA OCURRIDO UN ERROR, pronto se solucionará.');
});

module.exports = app;
