import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const dispatch = useDispatch();
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  const agregaProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

  const submitProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    agregaProducto({ nombre, precio });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>
            <form onSubmit={submitProducto} className="">
              <div className="form-group">
                <label htmlFor="" className="">
                  Nombre Producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="">
                  Nombre Producto
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  onChange={(e) => setPrecio(Number(e.target.value))}
                  value={precio}
                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                type="submit">
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? (
              <p className="alert alert-danger p-2 mt-2 text-center text-uppercase font-weight-bold">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
