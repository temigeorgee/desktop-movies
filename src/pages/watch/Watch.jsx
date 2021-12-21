import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import ReactNetflixPlayer from "react-netflix-player";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location, "watch");
  const currentMovie = location.movie;
  console.log(currentMovie);
  let videoUrl4k =
    currentMovie?.url?.desktop !== undefined
      ? currentMovie?.url?.desktop["4k"]
      : "not undefined";
  let history = useHistory();
  const handleVideoended = (e) => {
    let video = document.querySelector("video");

    video.load();
    video.autoplay = false;
  };
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <ReactNetflixPlayer
        src={videoUrl4k}
        playerLanguage="en"
        onEnded={() => {}}
        startPosition={0}
        title={currentMovie.title}
        subTitle={currentMovie.ratings}
        titleMedia={currentMovie.title}
        // extraInfoMedia={}
        onCrossClick={() => history.goBack()}
        autoPlay={true}
        backButton={() => history.goBack()}
      />
      {/* <video
        className="video"
        autoPlay
        progress
        controls
        controlsList="nodownload"
        src={currentMovie}
      /> */}
    </div>
  );
}
