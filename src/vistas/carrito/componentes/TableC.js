import { useState } from "react";
import { DeleteVentas } from "src/servivios";

export default function TableC({
  dataVentas,
  editar,
  setEditar,
  todasVentas = { todasVentas },
  setTodasVentas,
  setDataVentas,
  GetProductosData,
  setProductosData,
  GetProductosDataAll,
}) {
  
  const [cantidad, setcantidad] = useState();
  const [valorUnitario, setValorUnitario]= useState()
   
  const deleteProducto = (id) => {
    (async () => {
      const result = await DeleteVentas({ id });
      setTodasVentas(todasVentas.filter((d) => d._id != id));
      setDataVentas(dataVentas.filter((d) => d._id != id));
    })();
  };
  const arrSelect = ["en proceso", "entregado", "no entregado"];
  const renderOption = arrSelect.map((option) => {
    return <option key={option}>{option}</option>;
  });

  const total=(ar)=>{
    let totalres = 0
    ar.map((d)=>{
      totalres+=parseInt(d.valorU)*parseInt(d.cantidad)
    })
    return totalres

  }
  const setVentas = dataVentas.map((v,i) => {
    return (
      <tr key={v._id}>
        <td>{v._id}</td>
        <td>
          <div className="accordion accordion-flush" id={i}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#p${i}p`}
                  aria-expanded="false"
                  aria-controls={`p${i}p`}
                >
                  {v.productos.length} productos
                </button>
              </h2>
              <div
                id={`p${i}p`}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <table className="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>cantidad</th>
                        <th>valor U</th>
                      </tr>
                    </thead>
                    <tbody>
                      {v.productos.map((pro) => (
                        <tr key={pro.id}>
                          <td>{pro.id}</td>
                          <td>{pro.nombre}</td>
                          <td>{pro.cantidad}</td>
                          <td>{pro.valorU}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </td>
    <td> {total(v.productos)}</td>
                    
        <td>{v.fecha}</td>
       
        <td>{v.cliente_documento}</td>
        <td>{v.nombre_cliente}</td>
        {editar ? (
          <td>
            <select className="form-control form-select text-center">
              {renderOption}
            </select>
          </td>
        ) : (
          <td>{v.estado}</td>
          
        )}

        <td>{v.vendedor_id}</td>
        <td>
          {/* <svg LAPICITO
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
 */}
          <svg
            onClick={() => {
              deleteProducto(v._id);
            }}
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
    );
  });

  return (
    <section className="content col-12 col-md-10 order-2 order-md-1">
      <table className="table table-dark table-striped table-hover p-2 text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>productos</th>
            <th>Total</th>
            <th>Fecha</th>
            <th>Cliente id</th>
            <th>Cliente</th>
            <th>Estado de venta</th>
            <th>Vendedor</th>
            <th>opciones</th>
          </tr>
        </thead>
        <tbody>{setVentas}</tbody>
      </table>
    </section>
  );
}
