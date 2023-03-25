import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import { borrarProductoAction } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
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

  return (
    <tr>
      <td>{nombre}</td>
      <td className="">
        <span className="font-weight-bold">{precio}</span>
      </td>
      <td className="acciones">
        <Link className="btn btn-primary mr-2" to={`productos/editar/${id}`}>
          Editar
        </Link>
        <button
          onClick={() => confirmarEliminarProducto(id)}
          className="btn btn-danger"
          type="button">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
