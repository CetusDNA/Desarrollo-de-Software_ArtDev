import './BotonesEditar.css';

export function BotonesEditar() {
    return(
        <div class="row">
             <div class="col-sm-12 text-center">
                <button id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 200px;" >EDITAR USUARIO</button>
                <button id="btnClear" class="btn btn-warning btn-md center-block" Style="width: 200px;"  >CAMBIAR ESTADO</button>
                <button id="btnClear" class="btn btn-danger btn-md center-block" Style="width: 200px;"  >ELIMINAR USUARIO</button>
             </div>
         </div>
    );
    
}

export default BotonesEditar;