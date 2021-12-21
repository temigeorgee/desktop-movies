import { searchActionTypes } from "./search.types";
import axios from "../../axiosInstance";
import requests from "../../requests";

export const changeSearchInputValue = (inputValue) => ({
  type: searchActionTypes.CHANGE_SEARCH_INPUT_VALUE,
  payload: inputValue,
});

export const clearSearchInputValue = () => ({
  type: searchActionTypes.CLEAR_SEARCH_INPUT_VALUE,
});

export const fetchSearchResultsRequest = (searchQuery) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_REQUEST,
  payload: searchQuery,
});

export const fetchSearchResultsSuccess = (searchResults) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
  payload: searchResults,
});

export const fetchSearchResultsFailure = (errorMessage) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
  payload: errorMessage,
});

export const fetchSearchResultsAsync = (searchQuery) => {
  return (dispatch) => {
    console.log("searchQuery", searchQuery);
    // debugger;
    dispatch(fetchSearchResultsRequest(searchQuery));
    axios
      .get(`${requests.fetchSearchQuery}${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        const {
          data: { data },
        } = response;
        console.log(data, "results");
        // const filteredResults = data.filter(
        //   (data) => data.media_type !== "person"
        // );
        dispatch(fetchSearchResultsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchSearchResultsFailure(err.message));
      });
  };
};
