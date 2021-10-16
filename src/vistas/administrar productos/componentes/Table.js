import { DeleteProductos } from "src/servivios";

export default function Table({ isDisable, setProductsData, ProductsData, GetProductos }) {

  

const deleteProducto = (id)=>{
      (async () => {
        const resultados = await DeleteProductos({id}) 
        const result = await GetProductos()
        console.log(resultados.data)
        setProductsData(result.data.respuesta)
      })()
}



const UptadeEstado =(e)=>{
  console.log(e.target.value);

}
  return (
    <section className=" col-12 col-md-9 order-2 ">
      <table className="table table-dark table-striped table-hover p-2 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>nombre</th>
            <th>Descripción</th>
            <th>Valor unitario</th>
            <th>Estado</th>
            <th>opciones</th>
          </tr>
        </thead>
        <tbody>
          {ProductsData.map((p) => (
            <tr key={p._id}>
              <td>{p._id}</td>
              <td>{p.nombre}</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder={p.descripcion}
                  disabled={isDisable}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder={p.valorUnitario}
                  disabled={isDisable}
                ></input> 
              </td>
              <td>
                {p.estado == true ? (
                  <select
                    className="form-control form-select"
                    disabled={isDisable}
                    defaultValue={'Disponible'}

                  >
                    <option   value="Disponible" >Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                  </select>
                ) : (
                  <select
                    className="form-control form-select"
                    disabled={isDisable}
                    defaultValue={'No Disponible'}
                    onChange={UptadeEstado}

                  >
                    <option value="Disponible">Disponible</option>
                    <option   value="No Disponible" >No Disponible</option>
                  </select>
                )}
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                </svg>

                <svg
                onClick={()=>{deleteProducto(p._id)}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-trash  my-2 mx-auto text-red"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
