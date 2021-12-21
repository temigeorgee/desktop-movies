import "./movies.scss";
import { useRef, useState } from "react";
// import Banner from "../../components/Banner/Banner"
// import Row from "../../components/Row/Row";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import Banner from "../../component/Banner/Banner";
import Row from "../../component/Row/Row";
import Navbar from "../../component/Navbar/Navbar";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "../OfflinePage/OfflinePage";

const Movies = () => {
  const rows = useRetrieveData("movies");
  const [mini, setMini] = useState(true);
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
            className="Movies"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Banner type="movies" />
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

export default Movies;
