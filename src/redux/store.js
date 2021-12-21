// import { applyMiddleware, createStore } from "redux"
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
// // import logger from "redux-logger";
// import createSagaMiddleware from 'redux-saga';
// import { persistStore } from "redux-persist";
// import rootReducer from "./rootReducer";
// import { rootSaga } from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [thunk, sagaMiddleware];

// // if (process.env.NODE_ENV === 'development') {
// //     middlewares.push(logger);
// // }

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
// sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);

// export default { store, persistor };

// Node module imports
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

// Combined reducers import
import rootReducer from "./rootReducer";

// Middleware import
import middleware from "../redux/middleware";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const persistConfig = {
  key: process.env.REACT_APP_PERSIST_CONFIG_KEY || "key",
  timeout: null,
  storage,
  blacklist: ["category"],
};

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
// export const store = createStore(persistedReducer, middleware);
