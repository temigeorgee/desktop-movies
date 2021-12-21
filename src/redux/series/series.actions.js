import axios, { constant } from "../../axiosInstance";
import axiosInstance from "../../AxiosInstances";
import { seriesActionTypes } from "./series.types";
// woozeee
// export const fetchwoozeeeSeriesRequest = () => ({
//   type: seriesActionTypes.FETCH_WOOZEEE_SERIES_REQUEST,
// });

// export const fetchwoozeeeSeriesSuccess = (woozeeeSeries, isPage) => ({
//   type: isPage
//     ? seriesActionTypes.FETCH_WOOZEEE_SERIES_SUCCESS
//     : seriesActionTypes.LOAD_MORE_WOOZEEE_SERIES_SUCCESS,
//   payload: woozeeeSeries,
// });

// export const fetchwoozeeeSeriesFailure = (errorMessage) => ({
//   type: seriesActionTypes.FETCH_WOOZEEE_SERIES_FAILURE,
//   payload: errorMessage,
// });

// export const fetchwoozeeeSeriesAsync = (fetchUrl, isPage) => {
//   return (dispatch) => {
//     dispatch(fetchwoozeeeSeriesRequest());
//     axios
//       .get(fetchUrl)
//       .then((res) => {
//         const woozeeeSeries = res.data.results.map((el) => ({
//           ...el,
//           isFavourite: false,
//         }));
//         if (isPage) {
//           dispatch(fetchwoozeeeSeriesSuccess(woozeeeSeries, isPage));
//         } else dispatch(fetchwoozeeeSeriesSuccess(woozeeeSeries));
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         dispatch(fetchwoozeeeSeriesFailure(errorMessage));
//       });
//   };
// };

//TOP_TEN
export const fetchTopTenSeriesRequest = () => ({
  type: seriesActionTypes.FETCH_TOP_TEN_SERIES_REQUEST,
});

export const fetchTopTenSeriesSuccess = (topTenSeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_TOP_TEN_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_TOP_TEN_SERIES_SUCCESS,
  payload: topTenSeries,
});

export const fetchTopTenSeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_TOP_TEN_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchTopTenSeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchTopTenSeriesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        const topTenSeries = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchTopTenSeriesSuccess(topTenSeries, isPage));
        } else dispatch(fetchTopTenSeriesSuccess(topTenSeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTopTenSeriesFailure(errorMessage));
      });
  };
};

// featured
export const fetchFeaturedSeriesRequest = () => ({
  type: seriesActionTypes.FETCH_FEATURED_SERIES_REQUEST,
});

export const fetchFeaturedSeriesSuccess = (featuredSeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_FEATURED_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_FEATURED_SERIES_SUCCESS,
  payload: featuredSeries,
});

export const fetchFeaturedSeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_FEATURED_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchFeaturedSeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchFeaturedSeriesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        const featuredSeries = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchFeaturedSeriesSuccess(featuredSeries, isPage));
        } else dispatch(fetchFeaturedSeriesSuccess(featuredSeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFeaturedSeriesFailure(errorMessage));
      });
  };
};
// Coming-soon
export const fetchComingSoonSeriesRequest = () => ({
  type: seriesActionTypes.FETCH_COMING_SOON_SERIES_REQUEST,
});

export const fetchComingSoonSeriesSuccess = (comingSoonSeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_COMING_SOON_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_COMING_SOON_SERIES_SUCCESS,
  payload: comingSoonSeries,
});

export const fetchComingSoonSeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_COMING_SOON_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchComingSoonSeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchComingSoonSeriesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        const comingSoonSeries = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        console.log(comingSoonSeries, "coming-soon");
        if (isPage) {
          dispatch(fetchComingSoonSeriesSuccess(comingSoonSeries, isPage));
        } else dispatch(fetchComingSoonSeriesSuccess(comingSoonSeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchComingSoonSeriesFailure(errorMessage));
      });
  };
};

// recommended
export const fetchRecommendedSeriesRequest = () => ({
  type: seriesActionTypes.FETCH_RECOMMENDED_SERIES_REQUEST,
});

export const fetchRecommendedSeriesSuccess = (recommendedSeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_RECOMMENDED_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_RECOMMENDED_SERIES_SUCCESS,
  payload: recommendedSeries,
});

export const fetchRecommendedSeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_RECOMMENDED_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchRecommendedSeriesAsync = (fetchUrl, isPage) => {
  console.log(fetchUrl, "i am recommend soon");
  return (dispatch) => {
    dispatch(fetchRecommendedSeriesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        const recommendedSeries = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchRecommendedSeriesSuccess(recommendedSeries, isPage));
        } else dispatch(fetchRecommendedSeriesSuccess(recommendedSeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchRecommendedSeriesFailure(errorMessage));
      });
  };
};

// Family
export const fetchFamilySeriesRequest = () => ({
  type: seriesActionTypes.FETCH_FAMILY_SERIES_REQUEST,
});

export const fetchFamilySeriesSuccess = (familySeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_FAMILY_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_FAMILY_SERIES_SUCCESS,
  payload: familySeries,
});

export const fetchFamilySeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_FAMILY_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchFamilySeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchFamilySeriesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const familySeries = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchFamilySeriesSuccess(familySeries, isPage));
        } else dispatch(fetchFamilySeriesSuccess(familySeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFamilySeriesFailure(errorMessage));
      });
  };
};

// Kids
export const fetchKidsSeriesRequest = () => ({
  type: seriesActionTypes.FETCH_KIDS_SERIES_REQUEST,
});

export const fetchKidsSeriesSuccess = (kidsSeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_KIDS_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_KIDS_SERIES_SUCCESS,
  payload: kidsSeries,
});

export const fetchKidsSeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_KIDS_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchKidsSeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchKidsSeriesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const kidsSeries = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchKidsSeriesSuccess(kidsSeries, isPage));
        } else dispatch(fetchKidsSeriesSuccess(kidsSeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchKidsSeriesFailure(errorMessage));
      });
  };
};

// Sci Fi & Fantasy
export const fetchSciFiFantasySeriesRequest = () => ({
  type: seriesActionTypes.FETCH_SCIFIFANTASY_SERIES_REQUEST,
});

export const fetchSciFiFantasySeriesSuccess = (sciFiFantasySeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_SCIFIFANTASY_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_SCIFIFANTASY_SERIES_SUCCESS,
  payload: sciFiFantasySeries,
});

export const fetchSciFiFantasySeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_SCIFIFANTASY_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchSciFiFantasySeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchSciFiFantasySeriesRequest());
    axios
      .get(fetchUrl)
      .then((res) => {
        const sciFiFantasySeries = res.data.results.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchSciFiFantasySeriesSuccess(sciFiFantasySeries, isPage));
        } else dispatch(fetchSciFiFantasySeriesSuccess(sciFiFantasySeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchSciFiFantasySeriesFailure(errorMessage));
      });
  };
};

// Trending
export const fetchTrendingSeriesRequest = () => ({
  type: seriesActionTypes.FETCH_TRENDING_SERIES_REQUEST,
});

export const fetchTrendingSeriesSuccess = (trendingSeries, isPage) => ({
  type: isPage
    ? seriesActionTypes.FETCH_TRENDING_SERIES_SUCCESS
    : seriesActionTypes.LOAD_MORE_TRENDING_SERIES_SUCCESS,
  payload: trendingSeries,
});

export const fetchTrendingSeriesFailure = (errorMessage) => ({
  type: seriesActionTypes.FETCH_TRENDING_SERIES_FAILURE,
  payload: errorMessage,
});

export const fetchTrendingSeriesAsync = (fetchUrl, isPage) => {
  return (dispatch) => {
    dispatch(fetchTrendingSeriesRequest());
    axios
      .get(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res, "trending");
        const trendingSeries = res.data.data.map((el) => ({
          ...el,
          isFavourite: false,
        }));
        if (isPage) {
          dispatch(fetchTrendingSeriesSuccess(trendingSeries, isPage));
        } else dispatch(fetchTrendingSeriesSuccess(trendingSeries));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTrendingSeriesFailure(errorMessage));
      });
  };
};
