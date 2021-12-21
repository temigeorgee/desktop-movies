import "./rowPoster.scss";
// import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import useGenreConversion from "../../hooks/useGenreConversion";
// import { showModalDetail } from "../../redux/modal/modal.actions";
import { Link } from "react-router-dom";

const RowPoster = (el) => {
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
    },
    isLarge,
    isFavourite,
  } = el;
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
  // const handleModalOpening = () => {
  // 	dispatch(showModalDetail({ ...item, fallbackTitle,  isFavourite }));
  // 	// dispatch(showModalDetail({ ...item, fallbackTitle, genresConverted, isFavourite }));

  // }

  return (
    <div
      className={`Row__poster ${isLarge && "Row__poster--big"}`}
      // onClick={handleModalOpening}
    >
      {/* {isLarge ? (
        portraitPosterURL ? (
          <img src={portraitPosterURL} alt={fallbackTitle} />
        ) : (
          ""
        )
      ) : posterURL ? (
        <img src={posters.desktop.landscape} alt={fallbackTitle} />
      ) : ( */}
      {/* // {`${BASE_IMG_URL}/${backdrop_path}`} */}
      <>
        <img src={portraitPosterURL} alt={fallbackTitle} />
        <div className="Row__poster__fallback">
          <span>{fallbackTitle}</span>
        </div>
      </>
      {/* )} */}
      <div className="Row__poster-info">
        <div className="Row__poster-info--iconswrp">
          <Link
            className="Row__poster-info--icon icon--play"
            // onClick={handlePlayAction}
            to={"/play"}
          >
            <FaPlay />
          </Link>
          {!isFavourite ? (
            <button className="Row__poster-info--icon icon--favourite">
              <FaPlus />
            </button>
          ) : (
            <button className="Row__poster-info--icon icon--favourite">
              <FaMinus />
            </button>
          )}
          <button className="Row__poster-info--icon icon--toggleModal">
            <FaChevronDown />
          </button>
        </div>
        <div className="Row__poster-info--title">
          <h3>{fallbackTitle}</h3>
          {/* wonder woman */}
        </div>
        <div className="Row__poster-info--genres">
          {/* {genresConverted && genresConverted.map(genre => (
						<span key={`Genre--id_${genre}`} className="genre-title">{genre}</span>
					))} */}
          action
        </div>
      </div>
    </div>
  );
};

export default RowPoster;
