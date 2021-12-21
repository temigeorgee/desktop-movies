import requests from "./requests";
import * as movieSelectors from "./redux/movies/movies.selectors";
import * as seriesSelectors from "./redux/series/series.selectors";

import {
  fetchRecommendedMoviesAsync,
  fetchAdventureMoviesAsync,
  fetchComingSoonMoviesAsync,
  fetchLatestMoviesAsync,
  fetchwoozeeeMoviesAsync,
  fetchTopRatedMoviesAsync,
  fetchTrendingMoviesAsync,
  fetchTopTenMoviesAsync,
  fetchMyListAsync,
  fetchFeaturedMoviesAsync,
} from "./redux/movies/movies.actions";
import {
  fetchRecommendedSeriesAsync,
  fetchTopTenSeriesAsync,
  fetchTrendingSeriesAsync,
  fetchComingSoonSeriesAsync,
} from "./redux/series/series.actions";

const {
  fetchTrendingMovies,
  fetchFeaturedMovies,
  fetchRecommendedMovies,
  fetchComingSoonMovies,
  fetchTopTenMovies,
  fetchRecommendedSeries,
  fetchTopTenSeries,
  fetchComingSoonSeries,
  fetchTrendingSeries,
  fetchMyList,
} = requests;

export const fetchFeaturedMoviesConfig = [
  {
    id: 0,
    thunk: fetchFeaturedMoviesAsync,
    url: fetchFeaturedMovies,
    title: "Featured Movies",
    genre: "featuredm",
    selector: movieSelectors.selectFeaturedMovies,
  },
];
export const fetchMyListDataConfig = [
  {
    id: 0,
    thunk: fetchMyListAsync,
    url: fetchMyList,
    title: "My List",
    genre: "mylist",
    selector: movieSelectors.selectMyList,
  },
];

export const fetchMovieDataConfig = [
  {
    id: 0,
    thunk: fetchTopTenMoviesAsync,
    url: fetchTopTenMovies,
    title: "Top Ten on woozeee",
    genre: "topten",
    selector: movieSelectors.selectTopTenMovies,
  },
  {
    id: 1,
    thunk: fetchTrendingMoviesAsync,
    url: fetchTrendingMovies,
    title: "Trending movies on woozeee",
    genre: "popular",
    selector: movieSelectors.selectTrendingMovies,
  },
  // {
  //   id: 2,
  //   thunk: fetchwoozeeeMoviesAsync,
  //   url: fetchwoozeeeOriginals,
  //   title: "woozeee Originals",
  //   genre: "woozeee",
  //   selector: movieSelectors.selectwoozeeeMovies,
  //   isLarge: true,
  // },
  {
    id: 3,
    thunk: fetchRecommendedMoviesAsync,
    url: fetchRecommendedMovies,
    title: "Recommended on woozeee",
    genre: "Recommended",
    selector: movieSelectors.selectRecommendedMovies,
  },
  {
    id: 4,
    thunk: fetchComingSoonMoviesAsync,
    url: fetchComingSoonMovies,
    title: "Coming soon on woozeee",
    genre: "coming-soon",
    selector: movieSelectors.selectComingSoonMovies,
  },
];

export const fetchSeriesDataConfig = [
  {
    id: 1,
    thunk: fetchTrendingSeriesAsync,
    url: fetchTrendingSeries,
    title: "Popular",
    genre: "popular",
    selector: seriesSelectors.selectTrendingSeries,
  },
  {
    id: 2,
    thunk: fetchRecommendedSeriesAsync,
    url: fetchRecommendedSeries,
    title: "Recommended on woozeee",
    genre: "Recommended",
    selector: seriesSelectors.selectRecommendedSeries,
  },
  {
    id: 3,
    thunk: fetchTopTenSeriesAsync,
    url: fetchTopTenSeries,
    title: "Top Ten on woozeee",
    genre: "topten",
    selector: seriesSelectors.selectTopTenSeries,
    // numbered: true,
  },
  {
    id: 4,
    thunk: fetchComingSoonSeriesAsync,
    url: fetchComingSoonSeries,
    title: "Coming soon on woozeee",
    genre: "coming-soon",
    selector: seriesSelectors.selectComingSoonSeries,
  },
];
export const fetchPopularDataConfig = [
  {
    id: 0,
    thunk: fetchTopTenMoviesAsync,
    url: fetchTopTenMovies,
    title: "Top Ten on woozeee",
    genre: "TopTen",
    selector: movieSelectors.selectTopTenMovies,
    isLarge: true,
  },
  {
    id: 1,
    thunk: fetchTrendingMoviesAsync,
    url: fetchTrendingMovies,
    title: "Trending movies on woozeee",
    genre: "popular",
    selector: movieSelectors.selectTrendingMovies,
  },
  {
    id: 4,
    thunk: fetchComingSoonMoviesAsync,
    url: fetchComingSoonMovies,
    title: "Coming soon on woozeee",
    genre: "coming-soon",
    selector: movieSelectors.selectComingSoonMovies,
  },
];
export const paymentSources = [
  {
    name: "woozeee Wallet",
    price: 99394.99,
    src: "/assets/images/payment-source-1.png",
  },
  {
    name: "access bank",
    price: 34677.02,
    src: "/assets/images/payment-source-2.png",
  },
  {
    name: "uba",
    price: 25500.44,
    src: "/assets/images/payment-source-3.png",
  },
  {
    name: "globus bank",
    price: 24222.18,
    src: "/assets/images/payment-source-4.png",
  },
  {
    name: "zenith bank",
    price: 1000.0,
    src: "/assets/images/payment-source-5.png",
  },
  {
    name: "pay with other banks",
    src: "/assets/images/payment-source-6.png",
  },
];

export const genresList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
];
