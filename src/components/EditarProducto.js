import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [producto, setProducto] = useState({ nombre: "", precio: "" });

  const productoeditar = useSelector((state) => state.productos.productoeditar);

  useEffect(() => {
    setProducto(productoeditar);
  }, [productoeditar]);

  const onChangeFormulario = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    navigate("/");
  };

  if (!producto) return;
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
            <form onSubmit={submitEditarProducto} className="">
              <div className="form-group">
                <label htmlFor="" className="">
                  Nombre Producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={producto?.nombre}
                  onChange={onChangeFormulario}
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
                  value={producto?.precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                type="submit">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
