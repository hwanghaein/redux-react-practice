import { combineReducers } from "redux";
// import todoReducer from "./todoReducers";
// import todoReducer from "../ducks/todoDock";
import todoReducer from "../actions/todoAction";


// combineReducers는 여러개의 Reducer를 하나로 합치는 역할 = rootReducer
const rootReducer = combineReducers({
    todo: todoReducer, // 각 state에 접근하기 위한 키 : todoReducer
});

export default rootReducer;