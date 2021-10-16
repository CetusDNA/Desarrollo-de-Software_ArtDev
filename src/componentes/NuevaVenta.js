import { useState } from "react";

export default function NuevaVenta({
  PostVentas,
  GetVentas,
  setDataVentas,
  GetProductosData,
  setProductosData,
  GetProductosDataAll,
}) {
  const [cliente_documento, setcliente_documento] = useState();
  const [fecha, setFecha] = useState();
  const [nombre_cliente, setnombre_cliente] = useState();
  const [estado, setEstado] = useState();
  const [id_producto, setid_producto] = useState();
  const [cantidad, setcantidad] = useState();
  const [ProductosSelecionados, setProductosSelecionados] = useState([]);
  const [vendedor_id, setvendedor_id] = useState();

  const buscarProducto = (e) => {
    setProductosData(GetProductosDataAll);
    console.log(GetProductosData.length);
    if (e.target.value.trim() == "" || GetProductosData.length == 0) {
      setProductosData(GetProductosDataAll);
    } else {
      setProductosData(
        GetProductosData.filter(
          (f) =>
            f._id.includes(e.target.value) || f.nombre.includes(e.target.value)
        )
      );
    }
  };

  const ChangeCD = (e) => {
    setcliente_documento(e.target.value);
  };

  const ChangeN = (e) => {
    setnombre_cliente(e.target.value);
  };

  const ChangeP = (e) => {
    setid_producto(e.target.value);
  };

  const Changeestado = (e) => {
    setEstado(e.target.value);
  };
  const ChangeC = (e) => {
    setcantidad(e.target.value);
  };

  const Changevid = (e) => {
    setvendedor_id(e.target.value);
  };

  const cantidadProducto = (e) => {
    console.log(e);
    let array = ProductosSelecionados;

  console.log(array)

    if (e.key === "Enter") {
      const producto = GetProductosDataAll.filter(f=>f._id==e.target.id)
      array.push({
        id: e.target.id,
        cantidad: e.target.value,
        nombre: e.target.name,
        valorU: producto[0].valorUnitario
      });
      array = array.filter((f) => f.id != e.target.id);
      setProductosData(GetProductosData.filter((f) => f._id != e.target.id));
    }
  };

  const sendData = (e) => {
   e.preventDefault()
    const fechaActual = Date.now();

    const url = "http://localhost:5000/ventas";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            
            estado,
            fecha: fechaActual,
            cliente_documento,
            nombre_cliente,
            vendedor_id,
            productos : ProductosSelecionados
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        (async () => {
          const result = await GetVentas();
          setDataVentas(result.data.respuesta);
        })();

        if (json.respuesta == "prodducto ha sido agregado.") {
          window.location.reload();
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  };

  const renderResultados = GetProductosData.slice(0, 5).map((p,i) => {
   
    return (
      <li key={p._id} className="list-group-item bg-dark text-white ">
        {p._id} - <strong>{p.nombre.toUpperCase()}</strong>
        <input
          type="number"
          className="form-control"
          placeholder="cantidad"
          id={p._id}
          data={p.valorUnitario}
          nickname={p.valorUnitario}
          name={p.nombre.toUpperCase()}
          onKeyDown={cantidadProducto}
        ></input>
      </li>
    );
  });

  const renderselecionados = ProductosSelecionados.map((p) => {
    return (
      <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.nombre}</td>
        <td>{p.cantidad}</td>
        <td>{p.valorU}</td>
      </tr>
    );
  });

  const guardarProduto = (e) => {};

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div className="modal-content bg-black text-center text-white">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Añadir Nueva Venta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={sendData} id="datosFormulario">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Id del cliente:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="recipient-name"
                    onChange={ChangeCD}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Nombre del cliente:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={ChangeN}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Nombre del vendedor:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    required
                    onChange={Changevid}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Estado de la Venta:
                  </label>

                  <select className="form-select" onChange={Changeestado} defaultValue={""} required>
                    <option disabled value="">selecione el estado</option>
                    <option>Pendiente</option>
                    <option>Entregado</option>
                    <option>En proceso</option>
                    
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text " className="col-form-label">
                    Productos:
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="producto a agregar"
                    onChange={buscarProducto}
                  ></input>
                </div>
              
                <div className="mb-3">  <ul className="list-group">{renderResultados}</ul></div>
          
                  <table className="table table-dark table-striped text-center mh-50 ">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>nombre</th>
                      <th>cantidad</th>
                      <th>Valor unitario</th>
                    </tr>
                  </thead>
                  <tbody>{renderselecionados}</tbody>
                </table>
                
                </form>
            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="submit"
                form="datosFormulario"
                className="btn btn-success"
               
              >
                Añadir
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}