export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//logout

export const actionLogout = () => ({
  type: "LOGOUT",
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch(actionLogout());
};
