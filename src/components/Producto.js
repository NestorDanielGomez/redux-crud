import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const confirmarEliminarProducto = (id) => {
    Swal.fire({
      title: "Seguro que desea Eliminar el producto?",
      text: "Acción no reversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarProductoAction(id));
      }
    });
  };

  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    navigate(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{producto?.nombre}</td>
      <td className="">
        <span className="font-weight-bold">{producto?.precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redireccionarEdicion(producto)}>
          Editar
        </button>
        <button
          onClick={() => confirmarEliminarProducto(producto?.id)}
          className="btn btn-danger"
          type="button">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
