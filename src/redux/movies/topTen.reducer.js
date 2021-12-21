import { moviesActionTypes } from "./movies.types";

const initialState = {
  loading: false,
  error: "",
  data: [],
  isLarge: false,
};

const topTenMoviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case moviesActionTypes.FETCH_TOP_TEN_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case moviesActionTypes.FETCH_TOP_TEN_MOVIES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
        isLarge: true,
      };
    case moviesActionTypes.LOAD_MORE_TOP_TEN_MOVIES_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload],
        loading: false,
        error: "",
      };
    case moviesActionTypes.FETCH_TOP_TEN_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default topTenMoviesReducer;
