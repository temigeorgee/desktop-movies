import "./banner.scss";
import { useRef, memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  staggerOne,
  bannerFadeInLoadSectionVariants,
  bannerFadeInVariants,
  bannerFadeInUpVariants,
} from "../../motionUtils";
// import { BASE_IMG_URL } from "../../requests";

import { FaPlay, FaPlayCircle, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { randomize, truncate } from "../../utils";
import { Link } from "react-router-dom";
// import SkeletonBanner from "../SkeletonBanner/SkeletonBanner";
import { useDispatch, useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import {
  selectFeaturedMovies,
  selectTrendingMovies,
  selectwoozeeeMovies,
} from "../../redux/movies/movies.selectors";
import {
  hideModalDetail,
  showModalDetail,
} from "../../redux/modal/modal.actions";
import {
  selectPurchaseModalContent,
  selectPurchaseModalState,
} from "../../redux/purchaseModal/purchaseModal.selector";
import {
  hidePurchaseModalDetail,
  showPurchaseModalDetail,
} from "../../redux/purchaseModal/purchaseModal.action";
import useOutsideClick from "../../hooks/useOutsideClick";
import { fetchFeaturedMoviesAsync } from "../../redux/movies/movies.actions";
import requests from "../../requests";
import { showInputPinModal } from "../../redux/inputPinModal/inputPinModal.action";
import { selectFeaturedSeries } from "../../redux/series/series.selectors";
import woo from "../../assets/images/woo.png";

const Banner = ({ type, detailMovie }) => {
  const { fetchFeaturedMovies } = requests;
  const [muted, setMuted] = useState(true);
  const [movie, setMovie] = useState({});
  const [movieUrl, setMovieUrl] = useState({});
  const [finalData, setFinalData] = useState({});

  //pass id from where im calling,
  const dispatch = useDispatch();

  const modalRef = useRef();
  const purchasemodalContent = useSelector(selectPurchaseModalContent);
  const purchasemodalClosed = useSelector(selectPurchaseModalState);
  const handleModalClose = () => dispatch(hideModalDetail());

  const handleToggleMute = (id) => {
    setMuted(!muted);
  };
  const handlePurchaseModalOpening = () => {
    handleModalClose();
    dispatch(showPurchaseModalDetail(...results));
  };

  const handlePurchaseModalClose = () => {
    dispatch(hidePurchaseModalDetail());
  };

  const handleVideoended = (e) => {
    let video = document.querySelector("video");
    video.load();
    video.autoplay = false;
  };

  useOutsideClick(modalRef, () => {
    if (!purchasemodalClosed) handlePurchaseModalClose();
  });

  useEffect(() => {
    if (detailMovie) {
      setMovieUrl(detailMovie);
    } else {
      dispatch(fetchFeaturedMoviesAsync(fetchFeaturedMovies, true));
      setMovie(finalData);
    }
  }, [finalData, detailMovie, dispatch, fetchFeaturedMovies]);
  console.log(finalData, "movie");

  const handleModalOpening = () => {
    if (detailMovie) {
      dispatch(showModalDetail(...[detailMovie]));
    } else {
      dispatch(showModalDetail(...[finalData]));
    }
  };
  let selector;
  switch (type) {
    case "movies":
      selector = selectFeaturedMovies;
      break;
    case "series":
      selector = selectFeaturedSeries;
      break;
    default:
      selector = selectFeaturedMovies;
      break;
  }
  const myData = useSelector(selector);
  const { loading, error, data: results } = myData;
  const Data = results[randomize(results)];
  const fallbackTitle = results?.title;
  const description = truncate(finalData?.description, 150);
  let moviesData = finalData;
  let moviesDataUrl = detailMovie;

  useEffect(() => {
    setFinalData(Data);
  }, []);
  return (
    <>
      <motion.section
        variants={bannerFadeInLoadSectionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="Banner__loadsection"
      >
        {/* {loading && "loading"}
        {error && <div className="errored">Oops, an error occurred.</div>} */}
      </motion.section>

      <motion.header
        variants={bannerFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="Banner"
      >
        {detailMovie ? (
          <>
            <motion.video
              variants={bannerFadeInUpVariants}
              // playsInline
              muted={muted}
              // loop
              // preload="auto"
              autoPlay
              poster={detailMovie?.posterURL}
              onEnded={handleVideoended}
              src={detailMovie?.landscapePreviewURL}
              className="video-preview absolute w-full object-cover h-full"
            ></motion.video>
            <motion.div
              className="Banner__content mt-28"
              variants={staggerOne}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {(type === "tvshows" || type === "movies") && (
                <motion.div
                  className="flex space-x-3 items-center justify-start"
                  variants={bannerFadeInUpVariants}
                >
                  <span className="text-lg lg:text-2xl">
                    {type === "movies" ? "Movies" : "Tv Shows"}
                  </span>
                  <select
                    name="genre"
                    id="genre"
                    className="font-bold leading-4 text-xs lg:text-lg p-1"
                    // onChange={(e) => setGenre(e.target.value)}
                    style={{
                      border: "1px solid #FF5757",
                      color: "#FF5757",
                      outline: "#FF5757",
                      borderRadius: "5px",
                      backgroundColor: " rgba(255, 87, 87, 0.1)",
                    }}
                  >
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                  </select>
                </motion.div>
              )}
              <motion.div
                variants={bannerFadeInUpVariants}
                className="flex gap-x-4 mt-6 items-center justify-start"
              >
                <img src={woo} alt="woozeee" />
                <p>{type === "movies" ? "Movies" : "Tv Shows"}</p>
              </motion.div>
              <motion.h1
                variants={bannerFadeInUpVariants}
                className="Banner__content--title"
              >
                {detailMovie?.title}
              </motion.h1>

              <motion.p
                variants={bannerFadeInUpVariants}
                className="Banner__content--description "
              >
                {detailMovie?.description}
              </motion.p>
              <motion.div
                variants={bannerFadeInUpVariants}
                className="Banner__buttons"
              >
                {finalData?.dollarPrice === 0 ? (
                  <Link
                    className="Banner__button"
                    to={{ pathname: "/watch", movie: movieUrl }}
                  >
                    <FaPlayCircle />
                    <span>Watch</span>
                  </Link>
                ) : (
                  <div
                    className="Banner__button"
                    onClick={handlePurchaseModalOpening}
                  >
                    <FaPlayCircle />
                    <span>Watch</span>
                  </div>
                )}
                <button className="Banner__button" onClick={handleModalOpening}>
                  <BiInfoCircle size="1.5em" />
                  <span>More info</span>
                </button>
              </motion.div>
            </motion.div>
            <div
              className="Row__poster-info--icon flex mr-4  place-content-end z-10 absolute bottom-24 right-12"
              style={{ fontSize: "20px" }}
              onClick={handleToggleMute}
            >
              {!muted ? <FaVolumeUp /> : <FaVolumeMute />}
            </div>
            <div className="Banner__panel" />
            <div className="Banner__bottom-shadow" />
          </>
        ) : (
          <>
            <motion.video
              variants={bannerFadeInUpVariants}
              // playsInline
              muted={muted}
              // loop
              // preload="auto"
              autoPlay
              poster={finalData?.posterURL}
              onEnded={handleVideoended}
              src={finalData?.landscapePreviewURL}
              className="video-preview absolute w-full object-cover h-full"
            >
              {/* <source
               
                type="video/mp4"
              ></source> */}
            </motion.video>
            {/* 
        <video src="https://res.cloudinary.com/amjedidiah/video/upload/v1628584955/My_name_Is_Tayo_Movie_Trailer_pncwza.mp4" autoplay loop className="video-preview absolute w-full object-cover"/> */}
            <motion.div
              className="Banner__content mt-28"
              variants={staggerOne}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {(type === "tvshows" || type === "movie") && (
                <motion.div
                  className="flex space-x-3 items-center justify-start"
                  variants={bannerFadeInUpVariants}
                >
                  <span className="text-lg lg:text-2xl">
                    {type === "movies" ? "Movies" : "Tv Shows"}
                  </span>
                  <select
                    name="genre"
                    id="genre"
                    className="font-bold leading-4 text-xs lg:text-lg p-1"
                    // onChange={(e) => setGenre(e.target.value)}
                    style={{
                      border: "1px solid #FF5757",
                      color: "#FF5757",
                      outline: "#FF5757",
                      borderRadius: "5px",
                      backgroundColor: " rgba(255, 87, 87, 0.1)",
                    }}
                  >
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                  </select>
                </motion.div>
              )}
              <motion.div
                variants={bannerFadeInUpVariants}
                className="flex gap-x-4 mt-6 items-center justify-start"
              >
                <img src={woo} alt="woozeee" />
                <p>{type === "movies" ? "Movies" : "Tv Shows"}</p>
              </motion.div>
              <motion.h1
                variants={bannerFadeInUpVariants}
                className="Banner__content--title"
              >
                {finalData?.title}
              </motion.h1>

              <motion.p
                variants={bannerFadeInUpVariants}
                className="Banner__content--description "
              >
                {description}
              </motion.p>
              <motion.div
                variants={bannerFadeInUpVariants}
                className="Banner__buttons"
              >
                {finalData?.dollarPrice === 0 ? (
                  <Link
                    className="Banner__button"
                    to={{ pathname: "/watch", movie: movie }}
                  >
                    <FaPlayCircle />
                    <span>Watch</span>
                  </Link>
                ) : (
                  <div
                    className="Banner__button"
                    onClick={handlePurchaseModalOpening}
                  >
                    <FaPlayCircle />
                    <span>Watch</span>
                  </div>
                )}
                <button className="Banner__button" onClick={handleModalOpening}>
                  <BiInfoCircle size="1.5em" />
                  <span>More info</span>
                </button>
              </motion.div>
            </motion.div>
            <div
              className="Row__poster-info--icon flex mr-4  place-content-end z-10 absolute bottom-24 right-12"
              style={{ fontSize: "20px" }}
              onClick={handleToggleMute}
            >
              {!muted ? <FaVolumeUp /> : <FaVolumeMute />}
            </div>
            <div className="Banner__panel" />
            <div className="Banner__bottom-shadow" />
          </>
        )}
      </motion.header>
    </>
  );
};

export default memo(Banner);
