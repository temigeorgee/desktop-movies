import "./category.scss";
import { motion } from "framer-motion";
import { staggerHalf } from "../../motionUtils";
import { useState } from "react";
import { useRetrieveCategory } from "../../hooks/useRetrieveCategory";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useLazyLoad from "../../hooks/useLazyLoad";
import Poster from "../../component/Poster/Poster";
import SkeletonPage from "../../component/SkeletonPage/SkeletonPage";
import SkeletonPoster from "../../component/SkeletonPoster/SkeletonPoster";
import InfiniteScroll from "react-infinite-scroll-component";

const Category = ({ match }) => {
  const [pageNumber, setPageNumber] = useState(2);
  const [pageSize, setPageSize] = useState(10);

  const { url } = match;
  const slicedUrl = url.split("/");
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
  // console.log(handleLoadMore);
  // const [endPageRef, isIntersecting] = useLazyLoad(handleLoadMore);

  return (
    <div className="Category">
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
            <motion.div
              className="Category__wrp"
              variants={staggerHalf}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {selectedGenre.data &&
                selectedGenre.data.length > 0 &&
                selectedGenre?.data.map((result, index) => {
                  console.log("lenght of lenghts", selectedGenre.data);

                  return (
                    <Poster
                      key={result._id}
                      item={result}
                      {...result}
                      ind={index}
                    />
                  );
                })}
              {/* {selectedGenre?.loading && (
            <div className="Category__subtitle">loading.....</div>
          )}
          {selectedGenre?.error && (
            <div className="Category__subtitle">Oops, an error occurred.</div>
          )} */}
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
              {/* <div className={`Category__endPage ${isIntersecting ? 'intersected' : null}`} ref={endPageRef} /> */}
            </motion.div>
          </InfiniteScroll>
        </>
      ) : (
        <SkeletonPage />
      )}
    </div>
  );
};

export default Category;
