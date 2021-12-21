import "./auth.scss";
import { useState } from "react";
// import SignIn from "../../components/SignIn/SignIn";
// import SignUp from "../../components/SignUp/SignUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BGPoster from "../../assets/images/bg.gif";
import BGVideo from "../../assets/videos/movie landing.mp4";
import Layer from "../../assets/images/Layer 1.svg";
import {
  staggerOne,
  authFadeInUpVariants,
  modalVariants,
  authPageFadeInVariants,
} from "../../motionUtils";
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js";
import { useSelector } from "react-redux";
import { selectAuthErrors } from "../../redux/auth/auth.selectors";
import SignIn from "../../component/SignIn/SignIn";

const Auth = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const authError = useSelector(selectAuthErrors);

  return (
    <motion.div
      className="Auth"
      variants={authPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="Auth__opacityLayer" />

      <video
        autoPlay
        loop
        poster={BGPoster}
        src={BGVideo}
        className="video-preview absolute w-full object-cover h-full"
      />
      <motion.div
        className="Auth__content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          variants={staggerOne}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.img
            variants={authFadeInUpVariants}
            className="mx-auto"
            src={Layer}
          />

          <motion.h2
            variants={authFadeInUpVariants}
            className="Auth__content--title"
          >
            Login
          </motion.h2>
          <SignIn />
          <motion.p
            variants={authFadeInUpVariants}
            className="Auth__content--smalltext mt-5"
          >
            Don't have an account yet?
            <Link
              to="/sign-up"
              className="Auth__content--smalltext_link text-lg"
              style={{ color: "#043f7c" }}
            >
              Sign up
            </Link>
          </motion.p>
          {authError && (
            <motion.p
              variants={authFadeInUpVariants}
              className="Auth__content--errors"
            >
              {authError}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Auth;
