const initialState = {
  data: [],
};

export default function users(state = initialState, action = {}) {
  switch (action.type) {
    case "user/fetch": {
      return {
        ...state,
        data: action.data,
      };
    }
    case "user/update": {
      const { user } = action.data;
      const { id, name } = user;
      const index = state.data.findIndex((user) => user.id === id);
      return {
        ...state,
        data:
          index !== -1
            ? state.data.map((user, i) =>
                i === index ? { ...user, newName: name } : user
              )
            : state.data,
      };
    }

    default:
      return state;
  }
}
