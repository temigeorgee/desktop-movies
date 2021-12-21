import "./poster.scss";
import { motion } from "framer-motion";
import { posterFadeInVariants } from "../../motionUtils";
import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";
import { FaChevronDown, FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import { showModalDetail } from "../../redux/modal/modal.actions";
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import { Link } from "react-router-dom";

const Poster = (result) => {
  const {
    item,
    item: {
      title,
      name,
      previewURL,
      posterURL,
      casts,
      thriller,
      portraitPosterURL,
      landscapePreviewURL,
      posters,
      ratings,
      year,
      duration,
      description,
      dollarPrice,
      movieURL,
    },
    isLarge,
    isFavourite,
  } = result;
  let fallbackTitle = title;
  // const genresConverted = useGenreConversion(genre_ids);
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.stopPropagation();
    dispatch(addToFavourites({ ...item, isFavourite }));
  };
  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch(removeFromFavourites({ ...item, isFavourite }));
  };

  const handleModalOpening = () => {
    dispatch(showModalDetail({ ...item, fallbackTitle, isFavourite }));
  };

  const handlePlayAction = (event) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      variants={posterFadeInVariants}
      className="Poster"
      onClick={handleModalOpening}
    >
      <>
        <img src={posterURL} alt={fallbackTitle} />
        <div className="Poster__fallback">
          <span>{fallbackTitle}</span>
        </div>
      </>

      <div className="Poster__info">
        {/* <video src={landscapePreviewURL} autoPlay={true} loop /> */}
        <div className="Poster__info--iconswrp">
          <Link
            className="Poster__info--icon icon--play"
            onClick={handlePlayAction}
            // to={"/play"}
          >
            <FaPlay />
          </Link>
          {!isFavourite ? (
            <button
              className="Poster__info--icon icon--favourite"
              onClick={handleAdd}
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className="Poster__info--icon icon--favourite"
              onClick={handleRemove}
            >
              <FaMinus />
            </button>
          )}
          <button className="Poster__info--icon icon--toggleModal">
            <FaChevronDown onClick={handleModalOpening} />
          </button>
        </div>
        <div className="Poster__info--title">
          <h3>{fallbackTitle}</h3>
        </div>
        {/* <div className="Poster__info--genres">
          {genresConverted &&
            genresConverted.map((genre) => (
              <span key={`Genre--id_${genre}`} className="genre-title">
                {genre}
              </span>
            ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Poster;
