// import "./signIn.scss";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { authFadeInUpVariants, staggerOne } from "../../motionUtils";
import "../../component/SignIn/signIn.scss";
import SignUpPic from "../../assets/images/Group 2170.svg";

const SignUp = () => {
  return (
    <motion.form
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit"
      className="SignIn__form"
    >
      <motion.div
        variants={authFadeInUpVariants}
        className="SignIn__form--inputwrp"
      ></motion.div>
      <motion.div
        variants={authFadeInUpVariants}
        className="SignIn__form--inputwrp flex justify-center items-center flex-col"
      >
        <motion.img
          variants={authFadeInUpVariants}
          src={SignUpPic}
          alt="phone"
          className="w-40"
          style={{ marginTop: "-2rem" }}
        />
        <motion.p
          variants={authFadeInUpVariants}
          style={{ marginTop: "-2rem", color: "#043F7C" }}
          className="text-center"
        >
          Download the woozeee app on your <br /> mobile and sign up now.
        </motion.p>
      </motion.div>
      <motion.button
        type="submit"
        variants={authFadeInUpVariants}
        className="SignIn__form--button button__submit"
      >
        Download from Mobile Stores
      </motion.button>
    </motion.form>
  );
};

export default SignUp;
