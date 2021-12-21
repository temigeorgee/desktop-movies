import "./category.scss";
import { motion } from "framer-motion";
import { staggerHalf } from "../../motionUtils";
import { useRef, useState } from "react";
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useLazyLoad from "../../hooks/useLazyLoad";
import Poster from "../../component/Poster/Poster";
import SkeletonPage from "../../component/SkeletonPage/SkeletonPage";
import SkeletonPoster from "../../component/SkeletonPoster/SkeletonPoster";
import Navbar from "../../component/Navbar/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "../OfflinePage/OfflinePage";

const Category = ({ match }) => {
  const [mini, setMini] = useState(true);
  const [pageNumber, setPageNumber] = useState(5);
  const [pageSize, setPageSize] = useState(10);

  const { url } = match;
  const slicedUrl = url.split("/");
  let mySidebarRef = useRef();
  let mainRef = useRef();
  const { categoryName } = useParams();
  const categoryData = useRetrieveCategory(
    slicedUrl[1],
    categoryName,
    pageNumber,
    pageSize
  );
  const preventUndefinedSelector = () => undefined;
  const selector = categoryData
    ? categoryData.selector
    : preventUndefinedSelector;
  const selectedGenre = useSelector(selector);
  const handleLoadMore = () => setPageNumber((pageNumber) => pageNumber + 1);
  console.log(selectedGenre?.loading, "cat");
  // const [endPageRef, isIntersecting] = useLazyLoad(handleLoadMore);

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
  // console.log(selectedGenre, "selectedGenre?.data.length");
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

          <div className="Category" ref={mainRef}>
            {categoryData ? (
              <>
                <h2 className="Category__title">{categoryData?.title}</h2>
                <InfiniteScroll
                  dataLength={selectedGenre?.data.length} //This is important field to render the next data
                  next={handleLoadMore}
                  hasMore={true}
                  // loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {/* <motion.div
                    className="Category__wrp"
                    variants={staggerHalf}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  > */}
                  {selectedGenre.data &&
                    selectedGenre.data.length > 0 &&
                    selectedGenre?.data.map((result, index) => {
                      return (
                        <Poster
                          key={result._id}
                          item={result}
                          {...result}
                          ind={index}
                        />
                      );
                    })}
                  {selectedGenre.loading && (
                    <div className="Category__subtitle">
                      <SkeletonPoster />
                    </div>
                  )}
                  {selectedGenre.error && (
                    <div className="Category__subtitle">
                      Oops, an error occurred.
                    </div>
                  )}
                  {/* <div
                    className={`Category__endPage ${
                      isIntersecting ? "intersected" : null
                    }`}
                    ref={endPageRef}
                  /> */}
                  {/* </motion.div> */}
                </InfiniteScroll>
              </>
            ) : (
              <SkeletonPage />
            )}
          </div>
        </div>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
};

export default Category;
