import "./homepage.scss";
import { useEffect, useState } from "react";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import Banner from "../../component/Banner/Banner";
import Row from "../../component/Row/Row";
import axios from "axios";
import Footer from "../../component/Footer/Footer";
import { useRouteMatch } from "react-router";

const Homepage = () => {
  const row = useRetrieveData("movies");

  // let authToken = " ";
  // const paramsMatch = window.location.href.match(/\?.+/);
  // if (paramsMatch) {
  //   const params = new URLSearchParams(paramsMatch[0]);
  //   authToken = params.get("token");
  //   if (authToken) {
  //     console.log("generatedToken", authToken);
  //     localStorage.authToken = authToken;

  //     axios
  //       .get("https://apis.woozeee.com/api/v1/user/current", {
  //         headers: { Authorization: `Bearer ${authToken}` },
  //       })
  //       .then((res) => {
  //         console.log("data from user.me", res.data.data);
  //         localStorage.userData = JSON.stringify(res.data.data);
  //       });
  //   }
  // }
  const [detailMovie, setDetailMovie] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let watchId = params.get("watch");
    axios
      .get(`https://apis.woozeee.com/api/v1/movies/${watchId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((res) => {
        console.log("data from user.me", res.data.data);
        localStorage.userData = JSON.stringify(res.data.data);
      });
    // https://apis.woozeee.com/api/v1/movies/:movieId
    //call axios to fetch the movie using an id
    //get the response from the server
    //get the movie url
    setDetailMovie(/** pass in the movie url here */);
  }, []);

  return (
    <motion.div
      className="Homepage"
      variants={defaultPageFadeInVariants}
      initial="initial"
      ß
      animate="animate"
      exit="exit"
    >
      <Banner type="movies" detailMovie={detailMovie} />
      {row && row.map((props) => <Row key={props.id} {...props} />)}
      <Footer />
    </motion.div>
  );
};

export default Homepage;
