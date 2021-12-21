import "./homepage.scss";

import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import Banner from "../../component/Banner/Banner";
import Row from "../../component/Row/Row";
import axios from "axios";
import Footer from "../../component/Footer/Footer";
import { NavLink } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import { useRef, useState } from "react";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "../OfflinePage/OfflinePage";

const Homepage = () => {
  const [mini, setMini] = useState(true);
  const row = useRetrieveData("movies");
  let mySidebarRef = useRef();
  let mainRef = useRef();

  const handleToggleSidebar = () => {
    if (mini) {
      console.log("opening sidebar");
      mySidebarRef.current.style.width = "180px";
      mainRef.current.style.marginLeft = "180px";
      setMini(false);
    } else {
      console.log("closing sidebar");
      mySidebarRef.current.style.width = "85px";
      mainRef.current.style.marginLeft = "85px";
      setMini(true);
    }
  };

  return (
    <>
      <Online>
        <div className="Homepagedesktop">
          <div
            ref={mySidebarRef}
            className="sidebar space-y-14"
            onMouseOver={handleToggleSidebar}
            onMouseOut={handleToggleSidebar}
          >
            <Navbar />
          </div>

          <motion.div
            ref={mainRef}
            className="Homepage"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Banner type="movies" />
            {row && row.map((props) => <Row key={props.id} {...props} />)}
            <Footer />
          </motion.div>
        </div>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
};

export default Homepage;
