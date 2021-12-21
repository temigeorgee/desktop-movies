import "./detailModal.scss";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerOne,
  modalOverlayVariants,
  modalVariants,
  modalFadeInUpVariants,
} from "../../motionUtils";
import { hideModalDetail } from "../../redux/modal/modal.actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalContent,
  selectModalState,
} from "../../redux/modal/modal.selectors";
import { VscChromeClose } from "react-icons/vsc";
import {
  capitalizeFirstLetter,
  dateToYearOnly,
  timeConvert,
} from "../../utils";
import {
  FaMinus,
  FaPlay,
  FaPlayCircle,
  FaPlus,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  hidePurchaseModalDetail,
  showPurchaseModalDetail,
} from "../../redux/purchaseModal/purchaseModal.action";
import {
  selectPurchaseModalContent,
  selectPurchaseModalState,
} from "../../redux/purchaseModal/purchaseModal.selector";
import { GiShoppingCart } from "react-icons/gi";
import { fetchTopTenMoviesAsync } from "../../redux/movies/movies.actions";

const DetailModal = () => {
  const [muted, setMuted] = useState(true);
  const [preview, setPreview] = useState();
  const dispatch = useDispatch();
  const modalClosed = useSelector(selectModalState);
  const modalContent = useSelector(selectModalContent);
  const purchasemodalContent = useSelector(selectPurchaseModalContent);
  const purchasemodalClosed = useSelector(selectPurchaseModalState);
  const handleModalClose = () => dispatch(hideModalDetail());

  const handlePurchaseModalOpening = () => {
    handleModalClose();
    dispatch(showPurchaseModalDetail());
  };
  const handlePurchaseModalClose = () => {
    dispatch(hidePurchaseModalDetail());
  };
  const {
    overview,
    casts,
    fallbackTitle,
    backdrop_path,
    release_date,
    first_air_date,
    posterURL,
    vote_average,
    original_language,
    landscapePreviewURL,
    ratings,
    adult,
    genresConverted,
    isFavourite,
    description,
    title,
    releaseType,
    duration,
    year,
    dollarPrice,
  } = modalContent;

  // console.log(results)
  const joinedGenres = genresConverted
    ? genresConverted.join(", ")
    : "Not available";
  const maturityRating =
    adult === undefined
      ? "Not available"
      : adult
      ? "Suitable for adults only"
      : "Suitable for all ages";
  const reducedDate = release_date
    ? dateToYearOnly(release_date)
    : first_air_date
    ? dateToYearOnly(first_air_date)
    : "Not Available";
  const modalRef = useRef();

  const handleAdd = (event) => {
    event.stopPropagation();
    dispatch(addToFavourites({ ...modalContent, isFavourite }));
  };
  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch(removeFromFavourites({ ...modalContent, isFavourite }));
    if (!modalClosed) handleModalClose();
  };
  useOutsideClick(modalRef, () => {
    if (!modalClosed) handleModalClose();
    if (!purchasemodalClosed) handlePurchaseModalClose();
  });
  const handleMuted = () => {
    setMuted(!muted);
  };
  useEffect(() => {
    setPreview(landscapePreviewURL);
  }, [landscapePreviewURL]);
  return (
    <AnimatePresence exitBeforeEnter>
      {!modalClosed && (
        <>
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="modalOverlay"
            className={`Modal__overlay ${modalClosed && "Modal__invisible"}`}
          >
            <motion.div
              key="modal"
              variants={modalVariants}
              ref={modalRef}
              className={`Modal__wrp ${modalClosed && "Modal__invisible"}`}
            >
              <motion.button
                className="Modal__closebtn"
                onClick={handleModalClose}
              >
                <VscChromeClose />
              </motion.button>
              <div className="Modal__image--wrp">
                <div className="Modal__image--shadow" />
                <video
                  src={preview}
                  autoPlay={true}
                  poster={posterURL}
                  muted={muted}
                  className="Modal__image--img h-96"
                />
                <div className="Modal__image--buttonswrp">
                  <div
                    className="Modal__image--button"
                    onClick={handlePurchaseModalOpening}
                  >
                    {/* <GiShoppingCart /> */}
                    <FaPlayCircle />
                    <span>
                      Watch for {dollarPrice === 0 ? "free " : dollarPrice}
                    </span>
                  </div>

                  <button
                    className="Modal__image--button-circular"
                    onClick={handleMuted}
                  >
                    {!muted ? <FaVolumeUp /> : <FaVolumeMute />}
                  </button>
                </div>
                {/* <p
                  className="text-white ml-8 font-bold text-xl"
                  style={{ transform: "translateY(-15px)" }}
                >
                  N50
                </p> */}
              </div>
              <motion.div
                variants={staggerOne}
                initial="initial"
                animate="animate"
                exit="exit"
                className="Modal__info--wrp"
              >
                <motion.div
                  variants={modalFadeInUpVariants}
                  className="Modal__info--row space-x-3"
                >
                  <span className="text-green-700">{releaseType}</span>
                  <span className="Modal__info--row-label">
                    {year === undefined ? "" : year}
                  </span>
                  <span className="Modal__info--row-label limit">
                    {ratings}
                  </span>
                  <span className="Modal__info--row-label">
                    {duration === undefined ? "" : timeConvert(duration)}
                  </span>
                </motion.div>
                <motion.h3
                  variants={modalFadeInUpVariants}
                  className="Modal__info--title flex items-center justify-between"
                >
                  {fallbackTitle || title}
                  <div className="Modal__info--title__caption text-sm flex items-center justify-between gap-2 ">
                    Casts :
                    {casts?.map((el) => (
                      <span className="text-xs space-x-3 ">{el.name}</span>
                    ))}
                  </div>
                </motion.h3>

                <motion.div
                  className="Modal__info--description flex items-center justify-between space-x-4"
                  variants={modalFadeInUpVariants}
                >
                  <p>{description}</p>
                </motion.div>
                {/* <motion.div className="">
                  <span>casts: {casts}</span>
                </motion.div> */}

                <motion.hr
                  variants={modalFadeInUpVariants}
                  className="Modal__info--line"
                />
                <motion.h4
                  variants={modalFadeInUpVariants}
                  className="Modal__info--otherTitle"
                >
                  Info on <b>{fallbackTitle}</b>
                </motion.h4>
                <motion.div
                  variants={modalFadeInUpVariants}
                  className="Modal__info--row"
                >
                  <span className="Modal__info--row-label">Genres: </span>
                  {/* <span className="Modal__info--row-description">{joinedGenres}</span> */}
                </motion.div>
                <motion.div
                  variants={modalFadeInUpVariants}
                  className="Modal__info--row"
                >
                  <span className="Modal__info--row-label">
                    {/* {release_date ? "Release date: " : "First air date: "} */}
                  </span>
                  <span className="Modal__info--row-description">
                    {reducedDate}
                  </span>
                </motion.div>
                <motion.div
                  variants={modalFadeInUpVariants}
                  className="Modal__info--row"
                >
                  <span className="Modal__info--row-label">Average vote: </span>
                  {/* <span className="Modal__info--row-description">{vote_average || "Not available"}</span> */}
                </motion.div>
                <motion.div
                  variants={modalFadeInUpVariants}
                  className="Modal__info--row"
                >
                  <span className="Modal__info--row-label">
                    Original language:
                  </span>
                  {/* <span className="Modal__info--row-description">{capitalizeFirstLetter(original_language)}</span> */}
                </motion.div>
                <motion.div
                  variants={modalFadeInUpVariants}
                  className="Modal__info--row"
                >
                  <span className="Modal__info--row-label">
                    Age classification:
                  </span>
                  <span className="Modal__info--row-description">
                    {ratings === undefined ? "13 +" : ratings}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
