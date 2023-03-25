import React from "react";
import { Link } from "react-router-dom";

const Producto = ({ producto }) => {
  console.log({ producto });
  const { nombre, precio, id } = producto;
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
        <button className="btn btn-danger" type="button">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
