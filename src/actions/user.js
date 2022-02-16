import client from "./index";

const baseUrl = "http://dummy.restapiexample.com";

export const getUsers = () => {
  return (dispatch) => {
    // cache api data: too many requests error is annoying :)
    if (!localStorage['employees']) {
      client
      .get(`${baseUrl}/api/v1/employees`)
      .then((res) => {
        const { data } = res.data;
        localStorage['employees'] = JSON.stringify(data);
        dispatch({ type: "user/fetch", data: data });
      })
      .catch((err) => {
        dispatch({ type: "error/add", data: err.response.data });
      });
    } else {
      dispatch({ type: "user/fetch", data: JSON.parse(localStorage['employees']) });
    }
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "user/update", data: { user: user } });
  };
};
