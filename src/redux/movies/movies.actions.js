import { useContext } from "react";
import axios, { constant } from "../../axiosInstance";
import axiosInstance from "../../AxiosInstances";
import { convertMapToList } from "../../utils";
import { AuthContext } from "../auth/AuthContext";
import { moviesActionTypes } from "./movies.types";
// import axios from "axios";

export const getToken = localStorage.getItem("auth");
// export const getToken = () => localStorage.getItem("auth");
console.log(localStorage.getItem("auth"), "get-token");
// Recommended
export const fetchRecommendedMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_RECOMMENDED_MOVIES_REQUEST,
});

export const fetchRecommendedMoviesSuccess = (recommendedMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_RECOMMENDED_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_RECOMMENDED_MOVIES_SUCCESS,
  payload: recommendedMovies,
});

export const fetchRecommendedMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_RECOMMENDED_MOVIES_FAILURE,
  payload: error,
});

export const fetchRecommendedMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchRecommendedMoviesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then((res) => {
        const recommendedMovies = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchRecommendedMoviesSuccess(recommendedMovies, isPage));
        } else dispatch(fetchRecommendedMoviesSuccess(recommendedMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchRecommendedMoviesFailure(errorMessage));
      });
  };
};

// Coming-soon
export const fetchComingSoonMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_COMING_SOON_MOVIES_REQUEST,
});

export const fetchComingSoonMoviesSuccess = (comingSoonMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_COMING_SOON_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_COMING_SOON_MOVIES_SUCCESS,
  payload: comingSoonMovies,
});

export const fetchComingSoonMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_COMING_SOON_MOVIES_FAILURE,
  payload: error,
});

export const fetchComingSoonMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchComingSoonMoviesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then((res) => {
        const comingSoonMovies = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchComingSoonMoviesSuccess(comingSoonMovies, isPage));
        } else dispatch(fetchComingSoonMoviesSuccess(comingSoonMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchComingSoonMoviesFailure(errorMessage));
      });
  };
};

// Horror
export const fetchHorrorMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST,
});

export const fetchHorrorMoviesSuccess = (horrorMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_HORROR_MOVIES_SUCCESS,
  payload: horrorMovies,
});

export const fetchHorrorMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE,
  payload: error,
});

export const fetchHorrorMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchHorrorMoviesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const horrorMovies = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchHorrorMoviesSuccess(horrorMovies, isPage));
        } else dispatch(fetchHorrorMoviesSuccess(horrorMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchHorrorMoviesFailure(errorMessage));
      });
  };
};

// woozeee
export const fetchwoozeeeMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_WOOZEEE_MOVIES_REQUEST,
});

export const fetchwoozeeeMoviesSuccess = (woozeeeMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_WOOZEEE_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_WOOZEEE_MOVIES_SUCCESS,
  payload: woozeeeMovies,
});

export const fetchwoozeeeMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_WOOZEEE_MOVIES_FAILURE,
  payload: error,
});

export const fetchwoozeeeMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchwoozeeeMoviesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const woozeeeMovies = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchwoozeeeMoviesSuccess(woozeeeMovies, isPage));
        } else dispatch(fetchwoozeeeMoviesSuccess(woozeeeMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchwoozeeeMoviesFailure(errorMessage));
      });
  };
};

// Romance
export const fetchRomanceMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
});

export const fetchRomanceMoviesSuccess = (romanceMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_ROMANCE_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_ROMANCE_MOVIES_SUCCESS,
  payload: romanceMovies,
});

export const fetchRomanceMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
  payload: error,
});

export const fetchRomanceMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchRomanceMoviesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const romanceMovies = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchRomanceMoviesSuccess(romanceMovies, isPage));
        } else dispatch(fetchRomanceMoviesSuccess(romanceMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchRomanceMoviesFailure(errorMessage));
      });
  };
};

// Top Rated
export const fetchTopRatedMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_REQUEST,
});

export const fetchTopRatedMoviesSuccess = (topRatedMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_TOP_RATED_MOVIES_SUCCESS,
  payload: topRatedMovies,
});

export const fetchTopRatedMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE,
  payload: error,
});

export const fetchTopRatedMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchTopRatedMoviesRequest());

    axios
      .get(fetchUrl)
      .then((res) => {
        const topRatedMovies = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchTopRatedMoviesSuccess(topRatedMovies, isPage));
        } else dispatch(fetchTopRatedMoviesSuccess(topRatedMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTopRatedMoviesFailure(errorMessage));
      });
  };
};

// Trending
export const fetchTrendingMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_TRENDING_MOVIES_REQUEST,
});

export const fetchTrendingMoviesSuccess = (trendingMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_TRENDING_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_TRENDING_MOVIES_SUCCESS,
  payload: trendingMovies,
});

export const fetchTrendingMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_TRENDING_MOVIES_FAILURE,
  payload: error,
});

export const fetchTrendingMoviesAsync = (fetchUrl, isPage) => {
  console.log(fetchUrl, "fetchUrl");

  return (dispatch) => {
    dispatch(fetchTrendingMoviesRequest());

    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then((res) => {
        const Data = res.data.data;
        console.log("trending results", Data);
        const trendingMovies =
          //   res.data.data &&
          Data.map((el) => ({
            ...el,
            isFavourite: false,
          }));
        if (isPage) {
          dispatch(fetchTrendingMoviesSuccess(trendingMovies, isPage));
        } else dispatch(fetchTrendingMoviesSuccess(trendingMovies));
        console.log(res.data.data, "toptrendssss");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTrendingMoviesFailure(errorMessage));
      });
  };
};

export const createAndRemoveMyListRequest = () => ({
  type: moviesActionTypes.CREATE_AND_REMOVE_MY_LIST_REQUEST,
});
export const createMyListSuccess = (data) => ({
  type: moviesActionTypes.CREATE_MY_LIST_SUCCESS,
  payload: data,
});
export const removeMyListSuccess = ({ id }) => {
  console.log("remove my list success", id);
  return {
    type: moviesActionTypes.REMOVE_MY_LIST_SUCCESS,
    payload: id,
  };
};

export const fetchMyListRequest = () => ({
  type: moviesActionTypes.FETCH_MY_LIST_REQUEST,
});

export const fetchMyListSuccess = (myList, isPage) => ({
  type: moviesActionTypes.FETCH_MY_LIST_SUCCESS,
  // : moviesActionTypes.LOAD_MORE_MY_LIST_SUCCESS,
  payload: myList,
});

export const fetchMyListFailure = (error) => ({
  type: moviesActionTypes.FETCH_MY_LIST_FAILURE,
  payload: error,
});
export const fetchMyListAsync = (isPage) => {
  return async (dispatch) => {
    dispatch(fetchMyListRequest());
    try {
      const res = await axiosInstance.get(
        `/movies/groupings/mylist?categoryId=&movieType`
      );
      const myListData = res.data.data;

      dispatch(fetchMyListSuccess(myListData));
      // if (isPage) {
      // } else dispatch(fetchMyListSuccess(myListData));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchMyListFailure(errorMessage));
    }
  };
};

// export const fetchMyListAsync = (fetchUrl, isPage) => {
//   return (dispatch) => {
//     dispatch(fetchMyListRequest());
//     axios
//       .get(fetchUrl, {
//         headers: { Authorization: `Bearer ${localStorage.auth}` },
//       })
//       .then((res) => {
//         console.log(res, "myList");
//         const myListData = res.data.data;
//         console.log(myListData);
//         if (isPage) {
//           dispatch(fetchMyListSuccess(myListData, isPage));
//         } else dispatch(fetchMyListSuccess(myListData));
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         dispatch(fetchMyListFailure(errorMessage));
//       });
//   };
// };

// featuredMovies
export const fetchFeaturedMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_FEATURED_MOVIES_REQUEST,
});

export const fetchFeaturedMoviesSuccess = (featuredMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_FEATURED_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_FEATURED_MOVIES_SUCCESS,
  payload: featuredMovies,
});

export const fetchFeaturedMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_FEATURED_MOVIES_FAILURE,
  payload: error,
});

export const fetchFeaturedMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchFeaturedMoviesRequest());

    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then((res) => {
        const featuredData = res;
        console.log("featuredData list", featuredData);
        if (isPage) {
          dispatch(fetchFeaturedMoviesSuccess(featuredData, isPage));
        } else dispatch(fetchFeaturedMoviesSuccess(featuredData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFeaturedMoviesSuccess(errorMessage));
      });
  };
};

// TopTen
export const fetchTopTenMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_TOP_TEN_MOVIES_REQUEST,
});

export const fetchTopTenMoviesSuccess = (topTenMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_TOP_TEN_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_TOP_TEN_MOVIES_SUCCESS,
  payload: topTenMovies,
});

export const fetchTopTenMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_TOP_TEN_MOVIES_FAILURE,
  payload: error,
});

export const fetchTopTenMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchTopTenMoviesRequest());
    console.log(localStorage.getItem("auth"), "fetch-url");
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then((res) => {
        console.log(res, "topten");
        const topTenMovies = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchTopTenMoviesSuccess(topTenMovies, isPage));
        } else dispatch(fetchTopTenMoviesSuccess(topTenMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTopTenMoviesFailure(errorMessage));
      });
  };
};

// Latest
export const fetchLatestMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_LATEST_MOVIES_REQUEST,
});

export const fetchLatestMoviesSuccess = (latestMovies, isPage) => ({
  type: isPage
    ? moviesActionTypes.FETCH_LATEST_MOVIES_SUCCESS
    : moviesActionTypes.LOAD_MORE_LATEST_MOVIES_SUCCESS,
  payload: latestMovies,
});

export const fetchLatestTrendingMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_LATEST_MOVIES_FAILURE,
  payload: error,
});

export const fetchLatestMoviesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchLatestMoviesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const latestMovies = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchLatestMoviesSuccess(latestMovies, isPage));
        } else dispatch(fetchLatestMoviesSuccess(latestMovies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchLatestTrendingMoviesFailure(errorMessage));
      });
  };
};
