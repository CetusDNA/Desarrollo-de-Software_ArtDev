import logo from './imagenes/logo_calzadoMintic.png';
import './App.css'
import Button from '@material-ui/core/Button';
import {Tabla} from "./Tabla";
import {Perfil} from "./Perfil";
import {BotonesEditar} from "./BotonesEditar";

function App() {
  return (
  <div className="App">
    <div className="container">
     <Header /> 
    </div>
    <div className="tabla-usuario d-flex justify-content-center">
      <div className="contenedor_tp  ">
        <div className="col-10 ">
          <Tabla />
        </div>
        <div className ="col-3">
          <Perfil />
        </div>  
      </div>
    </div>
    <div className="boton ">
      <BotonesEditar />
    </div>
  </div>
  );
}

function Header() {
  return(
  <div className="container pt-2 " >
      <div className="row ">
        <div className="col-1">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-4">
          <h1>
            CALZADO MINTIC
          </h1>
        </div>
        <div className="col-1">
        <Button variant="contained" color="primary">
           MENU
        </Button>
        </div> 
      </div>
    </div> 
  );
}


export default App;
