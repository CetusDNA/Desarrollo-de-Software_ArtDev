import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import{ Verificar , GetVentas}  from "./servivios/index";
import Administracion from "./vistas/administracion/Administracion";
import Productos from "./vistas/administrar productos/Productos";
import Carrito from "./vistas/carrito/Carrito";
import AppLogin from "./vistas/Verficacion/AppLogin";

function App() {


  useEffect(async ()=>{
  
    Verificar()
    GetVentas()
  
  },[])
  


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Administration">
            <Administracion></Administracion>
          </Route>
          <Route path="/Productos">
            <Productos></Productos>
          </Route>

          <Route path="/Carrito">
            <Carrito></Carrito>
          </Route>

          <Route path="/">
            <AppLogin></AppLogin>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
