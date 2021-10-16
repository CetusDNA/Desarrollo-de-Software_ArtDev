import "./App.css";
import { useEffect, useState } from "react";
import Header from "src/componentes/header/Header";
import { PutUsuarios } from "src/servivios";

function Administracion() {
  const [data, setData] = useState([]);
  const [isDisable, setIsDisable] = useState(true);

  const [dataUsuarios, setdataUsuarios] = useState([]);
  const [dataUsuariosAll, setdataUsuariosAll] = useState([]);
  const [editData, setEditData] = useState([]);

  const filtrarDatos = (e)=>{
    setdataUsuarios(dataUsuariosAll)
    if(e.target.value.trim()=="" ||dataUsuarios.lenght==0  ){
      setdataUsuarios(dataUsuariosAll)
   }else{
    setdataUsuarios( dataUsuarios.filter(f=>f.documento.includes(e.target.value) || f.nombre.toLowerCase().includes(e.target.value.toLowerCase()) ))
    }

  }

  const saveChanges=(e)=>{
    let array = editData
if(e.target.id=="estado"){
  (async()=>{
    const res = await PutUsuarios({id_usuario : e.target.name , estado : e.target.value   })
    console.log(res)
  })()
}else{
  (async()=>{
    const res = await PutUsuarios({id_usuario : e.target.name , role : e.target.value   })
    console.log(res)
  })()
}

console.log()
  
  

    // if(e.target.id=="estado"){
    //   const dato = array.map(n=>{
    //     if(n._id==e.target.name){
    //      return n.estado=e.target.value
    //     }
    //   })
    // }else{
    //   const dato = array.map(n=>{
    //     if(n._id==e.target.name){
    //      return n.role=e.target.value
    //     }
    //   })
    // }
    console.log(array)

    


  }

  useEffect(() => {
    const url = "http://localhost:5000/administracion/obtener";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.respuesta);
        setdataUsuarios(json.respuesta);
        setEditData(json.respuesta)
        setdataUsuariosAll(json.respuesta)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const ChangeValues = () => {
    setIsDisable(!isDisable);
  };

  const SaveData = () => {
    
    (async()=>{
      const res = await PutUsuarios({});
      console.log(res.data.respuesta)
    })()
  }

  return (
    <div className="App">
      <Header />
      <input type="search" placeholder="put something here" onChange={filtrarDatos} className="form-control mx-auto w-50 my-3"></input>
      <div className="tabla-usuario d-flex justify-content-end">
        <div className="container-fluid row g-1 ">
          <div className="col-12 col-md-8 my-5 mx-auto order-last order-md-first ">
            <div className="table-responsive-sm">
              <div>
                <table className="table table-striped table-bordered table-hover ">
                  <thead className="table-info">
                    <tr>
                      <th>ID</th>
                      <th>USUARIO</th>
                      <th>ROL</th>
                      <th>ESTADO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataUsuarios.map((user, i) => (
                      <tr className="bg-info" key={i}>
                        <td>{user.documento}</td>
                        <td>{user.nombre}</td>

                        <td>
                          <select
                            onChange={saveChanges}
                            className="form-control form-select"
                            disabled={isDisable}
                            defaultValue={user.role}
                            name={user._id}
                            id="role"
                          >
                            <option
                              className="form-control"
                              value={user.role}
                              
                            >
                              {user.role}
                            </option>
                            <option className="form-control" value="admin">
                              Admin
                            </option>
                            <option className="form-control" value="vendedor">
                              Vendedor
                            </option>
                          </select>
                        </td>
                        <td>
                          <select
                            className="form-control form-select"
                            defaultValue={user.estado}
                            disabled={isDisable}
                            onChange={saveChanges}
                            name={user._id}
                            id="estado"



                          >
                            <option
                              className="form-control"
                              value={user.estado}
                              
                            >
                              {user.estado}
                            </option>
                            <option className="form-control" value="autorizado">
                              autorizado
                            </option>
                            <option className="form-control" value="no autorizado">
                              no autorizado
                            </option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row container mx-auto my-5">
        <button
          id="btnSearch"
          className="btn mx-2 btn-primary btn-md center-block col-sm-10 mx-auto my-1 col-md-5 g-md-2 m-2 g-1"
          onClick={ChangeValues}
        >
          Modificar 
        </button>
        
      </div>
    </div>
  );
}

export default Administracion;
