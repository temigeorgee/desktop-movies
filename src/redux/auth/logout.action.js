import { logout } from "./auth.actions";

export const logOut = () => async (dispatch) => {
  try {
    await localStorage.removeItem("appState");
    await localStorage.removeItem("userToken");
    // await localStorage.clear();

    if (localStorage === null) {
      dispatch({ type: logout, payload: null });
    }

    return {
      error: false,
      message: "User logged out. Please login again",
    };
  } catch (error) {
    return {
      error: true,
      message: "Error login out user",
    };
  }
};
