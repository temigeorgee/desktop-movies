import "./listitem.scss";
import "./rowPoster.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaMinus,
  FaPlay,
  FaPlus,
  FaThumbsDown,
  FaThumbsUp,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { timeConvert } from "../../utils";
import { showModalDetail } from "../../redux/modal/modal.actions";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";

export default function ListItem(el, index, openMovieModal) {
  const {
    item,
    item: {
      _id,
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
      url,
    },
    isLarge,
    isFavourite,
  } = el;
  const [isHovered, setIsHovered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [movie, setMovie] = useState({});
  let fallbackTitle = title;

  // console.log(videoUrl4k, "url");
  // const genresConverted = useGenreConversion(genre_ids);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openMovieModal) {
      console.log("open movie modal", openMovieModal);
    }
  }, [openMovieModal]);

  const handleMuted = () => {
    setMuted(!muted);
  };
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
  useEffect(() => {
    setMovie(item);
  }, [item]);

  return (
    // <Link to={{ pathname: "/watch", movie: movie }}>
    <>
      <div
        // onClick={handleModalOpening}
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={posterURL} alt="" />
        {isHovered && (
          <>
            <>
              <Link to={{ pathname: "/watch", movie: movie }}>
                <video
                  src={landscapePreviewURL}
                  autoPlay={true}
                  loop
                  poster={posterURL}
                  muted={muted}
                />
              </Link>
              <div
                className="Row__poster-info--icon flex mr-4  place-content-end z-10 absolute bottom-20 right-0"
                style={{ fontSize: "13px" }}
                onClick={handleMuted}
              >
                {!muted ? <FaVolumeUp /> : <FaVolumeMute />}
              </div>
            </>
            <div className="itemInfo">
              <div className="flex justify-between items-center">
                <div className="icons pt-1 pl-2">
                  {dollarPrice === 0 ? (
                    <Link
                      className="Row__poster-info--icon icon--play"
                      to={{ pathname: "/watch", movie: movie }}
                    >
                      <FaPlay />
                    </Link>
                  ) : (
                    <Link
                      className="Row__poster-info--icon icon--play"
                      to={{ pathname: "/watch", movie: movie }}
                    >
                      <FaPlay />
                    </Link>
                  )}

                  {/* <GoPlus className="icon" /> */}
                  {!isFavourite ? (
                    <button
                      className="Row__poster-info--icon icon--favourite"
                      onClick={handleAdd}
                    >
                      <FaPlus />
                    </button>
                  ) : (
                    <button
                      className="Row__poster-info--icon icon--favourite"
                      onClick={handleRemove}
                    >
                      <FaMinus />
                    </button>
                  )}
                  <div className="Row__poster-info--icon">
                    <FaThumbsDown />
                  </div>
                  <div className="Row__poster-info--icon">
                    <FaThumbsUp />
                  </div>
                  {/* <HiOutlineThumbDown className="icon" />
                <HiOutlineThumbUp className="icon" /> */}
                </div>
                <button className="Row__poster-info--icon icon--toggleModal ">
                  <FaChevronDown onClick={handleModalOpening} />
                </button>
              </div>
              <div className="itemInfoTop pl-2">
                <span>
                  {duration === undefined ? "" : timeConvert(duration)}{" "}
                </span>
                <span className="limit">
                  {ratings === undefined ? "13 +" : ratings}
                </span>
                <span>{year === undefined ? "" : year}</span>
              </div>
              {/* <div className="desc">
                llendus velit quibusdam, architecto ipsam autem iure voluptas?
                Labore distinctio, quis dolores temporibus reprehenderit rerum.
              </div>
              <div className="genre">action</div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
