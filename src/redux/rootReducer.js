import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import auth from "./auth/authreducer";
import movies from "./movies";
import series from "./series";
import favourites from "./favourites";
import search from "./search";
import detailModal from "./modal";
import purchaseModal from "./purchaseModal";
import inputPinModal from "./inputPinModal";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favourites"],
};

const rootReducer = combineReducers({
  search,
  auth,
  movies,
  series,
  favourites,
  detailModal,
  purchaseModal,
  inputPinModal,
});

export default persistReducer(persistConfig, rootReducer);
