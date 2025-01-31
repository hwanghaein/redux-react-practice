// store은 상태를 관리하는 객체임. 저장소
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
import { thunk as thunkMiddleware } from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
