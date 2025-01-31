 // store은 상태를 관리하는 객체임. 저장소
 import { createStore } from "redux";
 import rootReducer from "./reducers";
 
 const store = createStore(
   rootReducer,
   // Redux DevTools 연동
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 
 export default store;
 