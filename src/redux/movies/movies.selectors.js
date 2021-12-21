import { createSelector } from "reselect";

export const selectRecommendedMovies = (state) =>
  state.movies.recommendedMovies;
export const selectAdventureMovies = (state) => state.movies.adventureMovies;
export const selectAnimationMovies = (state) => state.movies.animationMovies;
export const selectComingSoonMovies = (state) => state.movies.comingSoonMovies;
export const selectHorrorMovies = (state) => state.movies.horrorMovies;
export const selectwoozeeeMovies = (state) => state.movies.woozeeeMovies;
export const selectRomanceMovies = (state) => state.movies.romanceMovies;
export const selectTopRatedMovies = (state) => state.movies.topRatedMovies;
export const selectTrendingMovies = (state) => state.movies.trendingMovies;
export const selectTopTenMovies = (state) => state.movies.topTenMovies;
export const selectLatestMovies = (state) => state.movies.latestMovies;
export const selectMyList = (state) => state.movies.myList;
export const selectFeaturedMovies = (state) => state.movies.featuredMovies;
export const selectRecommendedMoviesSelector = createSelector(
  [selectRecommendedMovies],
  (recommendedMovies) => recommendedMovies.data
);

export const selectAdventureMoviesSelector = createSelector(
  [selectAdventureMovies],
  (adventureMovies) => adventureMovies.data
);

export const selectAnimationMoviesSelector = createSelector(
  [selectAnimationMovies],
  (animationMovies) => animationMovies.data
);

export const selectComingSoonMoviesSelector = createSelector(
  [selectComingSoonMovies],
  (comingSoonMovies) => comingSoonMovies.data
);

export const selectHorrorMoviesSelector = createSelector(
  [selectHorrorMovies],
  (horrorMovies) => horrorMovies.data
);

export const selectwoozeeeMoviesSelector = createSelector(
  [selectwoozeeeMovies],
  (woozeeeMovies) => woozeeeMovies.data
);

export const selectRomanceMoviesSelector = createSelector(
  [selectRomanceMovies],
  (romanceMovies) => romanceMovies.data
);

export const selectTopRatedMoviesSelector = createSelector(
  [selectTopRatedMovies],
  (topRatedMovies) => topRatedMovies.data
);

export const selectTrendingMoviesSelector = createSelector(
  [selectTrendingMovies],
  (trendingMovies) => trendingMovies.data
);

export const selectTopTenMoviesSelector = createSelector(
  [selectTopTenMovies],
  (topTenMovies) => topTenMovies.data
);

export const selectLatestMoviesSelector = createSelector(
  [selectLatestMovies],
  (latestMovies) => latestMovies.data
);
export const selectMyListSelector = createSelector(
  [selectMyList],
  (myList) => myList.data
);
export const selectFeaturedMoviesSelector = createSelector(
  [selectFeaturedMovies],
  (featuredMovies) => featuredMovies.data
);
