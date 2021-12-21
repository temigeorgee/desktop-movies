import { combineReducers } from "redux";
import recommendedMoviesReducer from "./recommended.reducer";
import adventureMoviesReducer from "./adventure.reducer";
import comingSoonMoviesReducer from "./comingSoon.reducer";
import horrorMoviesReducer from "./horror.reducer";
import woozeeeMoviesReducer from "./woozeee.reducer";
import romanceMoviesReducer from "./romance.reducer";
import topRatedMoviesReducer from "./topRated.reducer";
import trendingMoviesReducer from "./trending.reducer";
import animationMoviesReducer from "./animation.reducer";
import topTenMoviesReducer from "./topTen.reducer";
import latestReleasedMoviesReducer from "./latestReleased.reducer";
import myListReducer from "./myList.reducer";
import featuredMoviesReducer from "./featuredMovies.reducer";

export default combineReducers({
  recommendedMovies: recommendedMoviesReducer,
  adventureMovies: adventureMoviesReducer,
  animationMovies: animationMoviesReducer,
  comingSoonMovies: comingSoonMoviesReducer,
  horrorMovies: horrorMoviesReducer,
  woozeeeMovies: woozeeeMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  topTenMovies: topTenMoviesReducer,
  latestMovies: latestReleasedMoviesReducer,
  myList: myListReducer,
  featuredMovies: featuredMoviesReducer,
});
