import React, { Fragment } from "react";

const Productos = () => {
  return (
    <Fragment>
      <h2 className="my-5 text-center">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr className="">
            <th className="" scope="col">
              Nombre
            </th>
            <th className="" scope="col">
              Precio
            </th>
            <th className="" scope="col">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
