import requests from "./requests";
import * as movieSelectors from "./redux/movies/movies.selectors";
import * as seriesSelectors from "./redux/series/series.selectors";
import { store } from "./redux/store";
import { connect } from "react-redux";

import {
  fetchActionMoviesAsync,
  fetchAdventureMoviesAsync,
  fetchAnimationMoviesAsync,
  fetchComedyMoviesAsync,
  fetchHorrorMoviesAsync,
  fetchLatestMoviesAsync,
  fetchwoozeeeMoviesAsync,
  fetchRomanceMoviesAsync,
  fetchTopRatedMoviesAsync,
  fetchTrendingMoviesAsync,
  fetchTopTenMoviesAsync,
  fetchAllMoviesAsync,
} from "./redux/movies/movies.actions";
import {
  fetchActionAdventureSeriesAsync,
  fetchAnimationSeriesAsync,
  fetchComedySeriesAsync,
  fetchCrimeSeriesAsync,
  fetchDocumentarySeriesAsync,
  fetchFamilySeriesAsync,
  fetchKidsSeriesAsync,
  fetchwoozeeeSeriesAsync,
  fetchSciFiFantasySeriesAsync,
  fetchTrendingSeriesAsync,
} from "./redux/series/series.actions";

const {
  fetchReleasedMoviesByOneMonth,
  fetchTrendingMovies,
  fetchAllMovies,
  fetchFeaturedMovies,
  fetchwoozeeeOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchAdventureMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchAnimationMovies,
  fetchTopTenMovies,
  fetchActionAdventureSeries,
  fetchAnimationSeries,
  fetchComedySeries,
  fetchCrimeSeries,
  fetchDocumentarySeries,
  fetchFamilySeries,
  fetchKidsSeries,
  fetchSciFiFantasySeries,
  fetchTrendingSeries,
} = requests;

export const fetchMovieDataConfig = store.getState();
// export const fetchMovieDataConfig = [
// 	{
// 		id: 0,
// 		thunk: fetchAllMoviesAsync,
// 		url: fetchAllMovies,
// 		title: "Top Rated on Fakeflix",
// 		genre: "toprated",
// 		selector: movieSelectors.selectTopRatedMovies,
// 	},

// ];

const fetchPopularDataConfig = (props) => {
  const topTenMovies = props?.movies?.topTenMovies?.data;
  //   console.log("topTenMovies=>", topTenMovies);
  return [
    {
      id: 0,
      thunk: fetchTopRatedMoviesAsync,
      url: fetchTopRated,
      title: "Top Rated in your country",
      genre: "toprated",
      selector: movieSelectors.selectTopRatedMovies,
    },
    {
      id: 1,
      thunk: fetchLatestMoviesAsync,
      url: fetchReleasedMoviesByOneMonth,
      title: "New on woozeee",
      genre: "newin",
      selector: movieSelectors.selectLatestMovies,
    },
    {
      id: 2,
      thunk: fetchTopTenMoviesAsync,
      url: fetchTopTenMovies,
      title: "Top Ten",
      genre: "TopTen",
      selector: topTenMovies,
      isLarge: true,
    },
  ];
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(fetchPopularDataConfig);
