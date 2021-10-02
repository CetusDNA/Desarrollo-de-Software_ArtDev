
import './Tabla.css';



export function Tabla() {
    return(
        <div className="containe  mt-2  ">
        <div className="table-responsive-sm ">
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
    <tr className="bg-info">
       <td>10054128524</td>
       <td>Jimena</td>
       <td>cliente</td>
       <td>No permitido</td>
    </tr>
    <tr className="bg-info">
       <td>1078945612</td>
       <td>Colasnic</td>
       <td>Vendedor</td>
       <td>Autorizado</td>
    </tr>
    <tr className="bg-info">
       <td>1234528445</td>
       <td>Edna</td>
       <td>Administrador</td>
       <td>Autorizado</td>
    </tr>
    <tr className="bg-info">
       <td>104125444</td>
       <td>Alfredo</td>
       <td>Cliente</td>
       <td>No permitido</td>
    </tr>
</tbody> 
            </table>
            </div>
        </div>
    </div>
    );
}

export default Tabla;