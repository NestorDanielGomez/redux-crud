//cada reducer (productos/clientes/etc) tienen su propio state
import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR } from "../types";

const initialState = {
  productos: [],
  error: null,
  loading: false,
};

//si no le paso un state toma por defecto el initialState

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return { ...state, loading: action.payload };
    case AGREGAR_PRODUCTO_EXITO:
      return { ...state, loading: false, productos: [...state.productos, action.payload] };
    case AGREGAR_PRODUCTO_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
