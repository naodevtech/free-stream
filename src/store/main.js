const initialState = {
  name: "FreeStream",
  init: false,
  loading: false,
};

const initialStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP_INIT":
      return { ...state, loading: true };
    case "APP_READY":
      return { ...state, loading: false, init: true };
    case "APP_RESET":
      return state;
    default:
      return state;
  }
};

export default initialStateReducer;
