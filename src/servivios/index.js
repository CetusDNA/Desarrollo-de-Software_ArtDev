import axios from "axios";


const Verificar =  ()=>{
    if(localStorage.getItem("session")==null){
        console.log(window.location.pathname)
        if( window.location.pathname !=="/"){
         window.location.href = "/"
       }
       }else{
         if(localStorage.getItem("session")){

           

          ( async function () {
            const respuesta =  await  fetch("http://localhost:5000",{ headers: {"access-token" : localStorage.getItem("session")}})
            const res = await respuesta.json()
            console.log()
            if(res.mensaje!=='Token inválida' && res.mensaje !=="Token no proveída."){
              if( window.location.pathname =="/"){
                window.location.href = "/Productos"
              }
            }else{
              localStorage.removeItem("session")
              window.location.href = "/"
            }
          }());


        
         }
       }
}


//ventas 

const GetVentas =  async()=>{

  const res =await axios.get("http://localhost:5000/ventas",{ headers: {"access-token" : localStorage.getItem("session")}})
  res.data.respuesta.reverse()
  return res

}

const PostVentas =  async(body)=>{

  const res =await axios.post("http://localhost:5000/ventas",{ body, headers: {"access-token" : localStorage.getItem("session")}})
  return res

}

const PutVentas =  async(body)=>{

  const res =await axios.post("http://localhost:5000/ventas",{ body, headers: {"access-token" : localStorage.getItem("session")}})
  return res

}

const DeleteVentas =  async(body)=>{

  const res =await axios.delete("http://localhost:5000/ventas",{ data : body, headers: {"access-token" : localStorage.getItem("session")}})
  return res

}



//productos


const GetProductos =  async()=>{

  const res =await axios.get("http://localhost:5000/productos",{  headers: {"access-token" : localStorage.getItem("session")}})
  return res

}

const PostProductos =  async()=>{

  const res =await axios.get("http://localhost:5000/productos",{  headers: {"access-token" : localStorage.getItem("session")}})
  return res

}


const PutProductos =  async()=>{

  const res =await axios.get("http://localhost:5000/productos",{  headers: {"access-token" : localStorage.getItem("session")}})
  return res

}


const DeleteProductos =  async(body)=>{
  const res =await axios.delete("http://localhost:5000/productos",{  data: body, headers: {"access-token" : localStorage.getItem("session")}})

  return res

}

//usuarios


const GetuserData =  async()=>{

  const res =await axios.get("http://localhost:5000/users",{  headers: {"access-token" : localStorage.getItem("session")}})
  return res

}

const PostUsuarios =  async()=>{

  const res =await axios.post("http://localhost:5000/users",{  headers: {"access-token" : localStorage.getItem("session")}})
  return res

}

const PostUsuariosGoogle =  async(body)=>{

  const res =await axios.post("http://localhost:5000/users/google",{ data : body, headers: {"access-token" : localStorage.getItem("session")}})
  return res

}


const PutUsuarios =  async(body)=>{

  const res =await axios.put("http://localhost:5000/users",{ data: body , headers: {"access-token" : localStorage.getItem("session")}})
  return res

}


const Deleteusuarios =  async(body)=>{
  const res =await axios.delete("http://localhost:5000/users",{  data: body, headers: {"access-token" : localStorage.getItem("session")}})

  return res

}




export{ Verificar , GetVentas , PostVentas , GetProductos, DeleteProductos, DeleteVentas, GetuserData, PostUsuariosGoogle, PutUsuarios}


 