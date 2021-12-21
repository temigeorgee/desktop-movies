import { moviesActionTypes } from "./movies.types";

const initialState = {
  loading: false,
  error: "",
  data: [],
  isAdded: false,
  isRemoved: false,
};

const myListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case moviesActionTypes.CREATE_AND_REMOVE_MY_LIST_REQUEST:
    case moviesActionTypes.FETCH_MY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case moviesActionTypes.CREATE_MY_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
        isRemoved: false,
        isAdded: true,
      };
    case moviesActionTypes.REMOVE_MY_LIST_SUCCESS:
      const id = payload;
      console.log("payload to remove list", payload, "data", state.data);
      console.log(
        "filtered data",
        state.data.filter((d) => d._id !== id)
      );
      return {
        ...state,
        data: state.data.filter((d) => d._id !== id),
        loading: false,
        error: "",
        isRemoved: true,
        isAdded: false,
      };
    case moviesActionTypes.FETCH_MY_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };
    case moviesActionTypes.LOAD_MORE_MY_LIST_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload],
        loading: false,
        error: "",
      };
    case moviesActionTypes.CREATE_MY_LIST_FAILURE:
    case moviesActionTypes.REMOVE_MY_LIST_FAILURE:
    case moviesActionTypes.FETCH_MY_LIST_FAILURE:
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

export default myListReducer;
