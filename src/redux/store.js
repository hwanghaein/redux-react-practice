// store은 상태를 관리하는 객체임. 저장소
// import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
// import { thunk as thunkMiddleware } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
// import storage from 'redux-persist/lib/storage';
import sessionStorage from "redux-persist/lib/storage/session";
import {
  persistStore,
  persistReducer,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const migrations = {
  1: (state) => {
    return {
      ...state,
      fetchTodos: {
        ...state.fetchTodos,
        extraData: undefined,
      },
    };
  },
  2: (state) => {
    return {
      ...state,
      fetchTodos: {
        ...state.fetchTodos,
        extraData: null,
      },
    };
  },
};

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  version: 2,
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
// );
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return [...defaultMiddleware, sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
