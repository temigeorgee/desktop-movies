import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchMovieDataConfig,
  fetchPopularDataConfig,
  fetchSeriesDataConfig,
  fetchMyListDataConfig,
  fetchFeaturedMoviesConfig,
} from "../dataConfig";

export const useRetrieveData = (type) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  useEffect(() => {
    let selectedConfigArray = [];
    switch (type) {
      case "movies":
        selectedConfigArray = fetchMovieDataConfig;
        break;
      case "series":
        selectedConfigArray = fetchSeriesDataConfig;
        break;
      case "popular":
        selectedConfigArray = fetchPopularDataConfig;
        break;
      case "myList":
        selectedConfigArray = fetchMyListDataConfig;
        break;
      case "featuredMovies":
        selectedConfigArray = fetchFeaturedMoviesConfig;
        break;
      default:
        break;
    }

    let isPage = true;
    const rowsData =
      selectedConfigArray &&
      selectedConfigArray.length > 0 &&
      selectedConfigArray.map((el) => {
        dispatch(el.thunk(el.url, isPage));
        return {
          id: el.id,
          title: el.title,
          genre: el.genre,
          selector: el.selector,
          isLarge: el.isLarge,
        };
      });
    setData(rowsData);
  }, [type, dispatch]);
  console.log(data, "datapop");
  return data;
};
