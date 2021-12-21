import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchMovieDataConfig,
  fetchPopularDataConfig,
  fetchSeriesDataConfig,
} from "../dataConfig";

export const useRetrieveCategory = (
  slicedUrl,
  categoryName,
  pageNumber,
  pageSize
) => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    let selectedConfigArray = null;
    switch (slicedUrl) {
      case "browse":
      case "movies":
        selectedConfigArray = fetchMovieDataConfig;
        break;
      case "series":
        selectedConfigArray = fetchSeriesDataConfig;
        break;
      case "popular":
        selectedConfigArray = fetchPopularDataConfig;
        break;
      default:
        break;
    }

    const [data] = selectedConfigArray.filter(
      (el) => el.genre === categoryName
    );
    data.thunk(`${data.url}?&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    setCategoryData(data);
  }, [dispatch, categoryName, slicedUrl, pageNumber]);

  return categoryData;
};
