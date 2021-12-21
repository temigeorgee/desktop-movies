import "./myList.scss";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerHalf, defaultPageFadeInVariants } from "../../motionUtils";
import { useSelector } from "react-redux";
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors";
import Poster from "../../component/Poster/Poster";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import Navbar from "../../component/Navbar/Navbar";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "../OfflinePage/OfflinePage";

const MyList = ({ title, selector }) => {
  const favs = useSelector(selectFavouritesList);
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
            className="MyList"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {favs && favs.length > 0 && (
              <h2 className="MyList__title">My List</h2>
            )}
            <motion.div
              className="MyList__wrp"
              variants={staggerHalf}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {favs && favs.length > 0 ? (
                favs.map((result) => (
                  <Poster key={result.id} item={result} {...result} />
                ))
              ) : (
                <h2 className="MyList__title">
                  Sorry, you don&apos;t have a favourite movie or tv-show yet.
                </h2>
              )}
            </motion.div>
          </motion.div>
        </div>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
};

export default MyList;
