//cada reducer (productos/clientes/etc) tienen su propio state
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from "../types";

const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null,
};

//si no le paso un state toma por defecto el initialState

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return { ...state, loading: action.payload };

    case AGREGAR_PRODUCTO_EXITO:
      return { ...state, loading: false, productos: [...state.productos, action.payload] };

    case DESCARGA_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DESCARGA_PRODUCTOS_EXITO:
      return { ...state, loading: false, error: null, productos: action.payload };

    case OBTENER_PRODUCTO_ELIMINAR:
      return { ...state, productoeliminar: action.payload };

    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter((producto) => producto.id !== state.productoeliminar),
        productoeliminar: null,
      };

    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };
    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productoeditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id ? (producto = producto.payload) : producto
        ),
      };

    default:
      return state;
  }
}
