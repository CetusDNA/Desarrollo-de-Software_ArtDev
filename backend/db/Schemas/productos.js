const database = require("../mongo");

const Productos =  database.Schema({
    nombre : String,
    descripcion : String,
    valorUnitario : Number,
    estado :  Boolean
})

const productos = database.model("productos", Productos);
module.exports = productos;
