import user from './imagenes/usuario.png';
import './perfil.css';

export function Perfil() {
    return(
        <div className="perfil  mt-2">
            <div className="user_img-">
                <img src={user} className="user mt-2" alt="user" />
            </div>
            <div className="nom_user mt-3">
                <h6>
                        LIGHTWOOUD
                </h6>
                <h6>ID: 1003456789</h6>
                <h6>ROL: ADMINISTRADOR</h6>
            </div>
            <div className="btn_editar mt-3">
                <button type="button" class="btn btn-warning">Editar</button>
            </div>
            <div className="btn_salir mt-3">
                <button type="button" class="btn btn-danger">Salir</button>
            </div>
        </div>
    );
    
}

export default Perfil;