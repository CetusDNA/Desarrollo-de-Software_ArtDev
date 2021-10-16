import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imagenes/logo_calzadoMintic.png";
import { GetuserData } from "../../servivios";
export default function Header() {
  const [dataUsuario, setDataUsuario] = useState([]);
  function logout() {
    localStorage.removeItem("session");
    window.location.reload();
  }

  useEffect(async () => {
    const userdata = await GetuserData();
    setDataUsuario(userdata.data.respuesta);
  }, []);

  return (
    <div className="container-fluid mx-0 bg-dark text-white g-0  p-3">
      <div className="row">
        <div className="col-3 col-md-1">
          <img
            src={logo}
            className="rounded float-start img-fluid"
            alt="logo"
          />
        </div>
        <div className="col-6 text-center">
          <h1>CALZADO MINTIC</h1>
        </div>
        <div className="d-flex align-items-center justify-content-end col-4">
          <form className="w-25 me-2 align-items-center">
            <input
              type="search"
              className="form-control text-center"
              placeholder={dataUsuario.nombre}
              aria-label="Search"
              disabled
            />
          </form>
          <div className="flex-shrink-0 dropdown">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="35"
                height="35"
                className="rounded-circle"
              />
            </a>
            <ul
            className="dropdown-menu text-small shadow  mx-auto col-4"
            aria-labelledby="dropdownNavLink"
          >
            <li>
              <a className="dropdown-item">perfil</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                configuración
              </a>
            </li>
            <li onClick={logout} className="dropdown-item">
              Cerrar sessión
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/Administration">
                Administración
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Productos">
                Productos
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Carrito">
                Ventas
              </Link>
            </li>
          </ul>
          </div>
        </div>

       
        <h4></h4>
      </div>
    </div>
  );
}
