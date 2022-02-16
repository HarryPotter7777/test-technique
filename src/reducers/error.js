const initialState = {
  data: null,
};

export default function error(state = initialState, action = {}) {
  switch (action.type) {
    case "error/add":
      return {
        ...state,
        data: action.data,
      };

    case "error/clear":
      return initialState;

    default:
      return state;
  }
}
