import "./signIn.scss";
// import InputField from "../InputField/InputField";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { authFadeInUpVariants, staggerOne } from "../../motionUtils";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import {
//   emailSignInStart,
//   googleSignInStart,
//   anonymousSignInStart,
// } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector, connect } from "react-redux";
import { selectAuthLoadingState } from "../../redux/auth/auth.selectors";
import { login } from "../../redux/auth/auth.api";
// import InputField from "../InputField/InputField";
import { useContext, useState } from "react";
import { AuthContext } from "../../redux/auth/AuthContext";
import { store } from "../../redux/store";

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });

  // const [isFetching, setisFetching] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching, error } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // setisFetching(true);
    console.log(isFetching, isFetching);
    login({ email, password }, dispatch, isFetching, error);
    // .then()
    // .catch((err) => setisFetching(false));
  };

  return (
    <motion.form
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit"
      className="SignIn__form "
      onSubmit={handleLogin}
    >
      {error ? (
        <p className="text-yellow-500 text-sm">
          The password/email is invalid.
        </p>
      ) : null}
      <motion.div
        variants={authFadeInUpVariants}
        className="SignIn__form--inputwrp"
      >
        <div class="form">
          <input
            type="text"
            id="email"
            required
            class="form__input"
            autoComplete="off"
            placeholder=" "
            errors={errors}
            disabled={isFetching}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email" class="form__label">
            Email
          </label>
        </div>
      </motion.div>
      <motion.div
        variants={authFadeInUpVariants}
        className="SignIn__form--inputwrp"
      >
        <div class="form">
          <input
            type="password"
            id="password"
            class="form__input"
            autoComplete="off"
            required
            placeholder=" "
            errors={errors}
            disabled={isFetching}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="password" class="form__label">
            Password
          </label>
        </div>
      </motion.div>
      <motion.button
        type="submit"
        variants={authFadeInUpVariants}
        // onClick={() => handleLogin()}
        className={`SignIn__form--button button__submit ${
          isFetching && "loading"
        }`}
        disabled={isFetching}
      >
        {isFetching ? <Loader /> : "Login"}
      </motion.button>
      {/* <motion.button
				type="button"
				variants={authFadeInUpVariants}
				className={`SignIn__form--button button__google ${isLoading && 'loading'}`}
				onClick={() => dispatch(googleSignInStart())}
				disabled={isLoading}
			>
				{!isLoading && <FcGoogle />}
				{isLoading ? <Loader /> : 'Sign in with Google'}
			</motion.button> */}
      {/* <motion.button
				type="button"
				variants={authFadeInUpVariants}
				className={`SignIn__form--button button__anonymous ${isLoading && 'loading'}`}
				onClick={() => dispatch(anonymousSignInStart())}
				disabled={isLoading}
			>
				{isLoading ? <Loader /> : 'Sign in anonymously'}
			</motion.button> */}
    </motion.form>
  );
};

export default SignIn;
