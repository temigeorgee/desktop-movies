import "./popular.scss";
import { useRef, useState } from "react";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import Row from "../../component/Row/Row";
import requests from "../../requests";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { fetchTopTenMoviesAsync } from "../../redux/movies/movies.actions";
import Navbar from "../../component/Navbar/Navbar";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "../OfflinePage/OfflinePage";

const Popular = () => {
  const [mini, setMini] = useState(true);
  const rows = useRetrieveData("popular");
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
        <div className="grid">
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
            className="Popular"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {rows && rows.map((props) => <Row key={props.id} {...props} />)}
          </motion.div>
        </div>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
};

export default Popular;
