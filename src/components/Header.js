import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between ">
      <div className="container">
        <h1 className="">
          <Link to={"/"} className="text-light">
            Crud - React-app - Redux - Rest Api
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger nuevo-post d-block d-md-inline-block "
        to="/productos/nuevo">
        Agregar Producto
      </Link>
    </nav>
  );
};

export default Header;
