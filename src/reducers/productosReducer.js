//cada reducer (productos/clientes/etc) tienen su propio state

const initialState = {
  productos: [],
  error: null,
  loading: false,
};

//si no le paso un state toma por defecto el initialState

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
