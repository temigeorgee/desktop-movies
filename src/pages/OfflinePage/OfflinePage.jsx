import React from "react";
import { motion } from "framer-motion";
import NoConnection from "../../assets/images/error.gif";

const OfflinePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={NoConnection} alt="" width="250px" height="250px" />

      <div>
        <p>No internet connenction found. Check your connection or try again</p>
        {/* <button>try again</button> */}
      </div>
    </div>
  );
};

export default OfflinePage;
