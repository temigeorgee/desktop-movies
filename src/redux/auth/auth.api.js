import axios from "axios";
import { push } from "connected-react-router";
import { BiWindows } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "./auth.actions";

export const login = async (user, dispatch, isFetching) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://apis.woozeee.com/api/v1/user/login",
      user
    );
    console.log(res, "respons-login");
    if (res.data.error === false) {
      dispatch(loginSuccess(res.data));
    } else {
      dispatch(loginFailure());
    }
    // history.push("/login");
    if (res.data.token) {
      localStorage.setItem("auth", res.data.token);
    }
    localStorage.setItem("user", res.data.user);
    if (res.data.user) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    //  if (res.data) {
    //     dispatch(push("/browse"));
    //     window.location.reload();
    //   }
  } catch (err) {
    dispatch(loginFailure());
    console.log(err, "error");
    return err;
  }
};
