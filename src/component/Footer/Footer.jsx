import "./footer.scss";
import React from "react";
import { motion } from "framer-motion";
import { footerFadeInUpVariants } from "../../motionUtils";

const Footer = () => {
  return (
    <>
      <motion.footer
        variants={footerFadeInUpVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="Footer"
      >
        <motion.img src="/assets/images/footerLogo.svg" />
      </motion.footer>
    </>
  );
};

export default Footer;
