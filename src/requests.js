import { getOneMonthAgoReleaseDate } from "./utils";

export const LANG = "en-US";
export const REGION = "US";
export const BASE_IMG_URL = "";
export const FALLBACK_IMG_URL = ``;
export const LOGO_URL = ``;
export const MOBILE_LOGO_URL = ``;
export const PROFILE_PIC_URL = ``;
const ONEMONTHAGO = getOneMonthAgoReleaseDate();

const requests = {
  fetchSearchQuery: `/movies/filter?q=`,
  fetchNotification: `/movies/notifications`,
  fetchRecordMovie: `/movie-data`,
  // Movies
  fetchTrendingMovies: `movies/groupings/popular?categoryId=&movieType`,
  fetchTopTenMovies: `/movies/groupings/topten?categoryId=&movieType`,
  fetchRecommendedMovies: `/movies/groupings/recommended?categoryId=&movieType`,
  fetchComingSoonMovies: `/movies/groupings/soon?categoryId=&movieType`,
  fetchFeaturedMovies: `/movies/groupings/featured?categoryId=&movieType`,
  fetchMyList: `/movies/groupings/mylist?categoryId=&movieType`,
  // Series
  fetchTrendingSeries: `/movies/series/groupings/popular?categoryId=&movieType&pageSize&pageNumber`,
  fetchTopTenSeries: `/movies/series/groupings/topten?categoryId=&pageSize&PageNumber`,
  fetchRecommendedSeries: `/movies/series/groupings/recommended?categoryId=&pageSize&pageNumber`,
  fetchComingSoonSeries: `/movies/series/groupings/soon?categoryId=&pageNumber&pageSize`,
  fetchFeaturedSeries: `/movies/groupings/featured?categoryId=&pageNumber&pageSize`,
  fetchMyListSeries: `/movies/groupings/mylist?categoryId=&movieType=series`,
  fetchPreviouslyViewed: `/movies/series/groupings/viewed?categoryId=&movieType&pageNumber&pageSize`,
};

export default requests;
