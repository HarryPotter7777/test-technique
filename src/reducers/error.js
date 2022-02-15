const initialState = {
    error: null
};

export default function error(state = initialState, action = {}) {
  switch (action.type) {
    case "error/add":
      return {
        ...state,
        error: action.error,
      };

    case "error/clear":
      return initialState;

    default:
      return state;
  }
}
