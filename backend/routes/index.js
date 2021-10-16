const express = require("express");
const router = express.Router();
const Usuario = require('../db/Schemas/usuario');


/* GET home page. */
router.get("/", function (req, res, next) {

res.json({respuesta : "token valido" , estado : 1})


//   Usuario.find({})
//  .then((data)=>{
//   return res.json({respuesta :data})
//   })
//  .catch((err)=>{
//    console.log(err);
//    return res.json({respuesta :"error "})
//  })
 
  
});

router.post("/", function (req, res, next) {
  if(!req.body.nombre) return res.json({respuesta :"los datos no han sido enviado correctamente."})
  const usuario = new Usuario({ usuario: [{nombre :  "adssad", email : "akldfakdsj@asdasd.com", rol:"hgjhgh"}], nickName : "apodo", a:"a"});
  usuario.save().then(() => res.json( { respuesta: `el usuario ${req.body.nombre} ha sido agregado` }));
  
});


router.put("/", function (req, res, next) {
  const {id} = req.body;
  console.log(req.body)
  Usuario.updateOne({_id:id},{$set:{name:"actualizado"}},{multi:true,new:true})
 .then((data)=>{
  return res.json({respuesta :data})
  })
 .catch((err)=>{
   console.log(err);
   return res.json({respuesta :"error "})
 })
 
  
});

router.delete("/", function (req, res, next) {
  const {id} = req.body;
  console.log(req.body)
  Usuario.remove({_id:id})
 .then((data)=>{
  return res.json({respuesta :data})
  })
 .catch((err)=>{
   console.log(err);
   return res.json({respuesta :"error "})
 })
 
  
});





module.exports = router;
