import { combineReducers } from "redux";
// import todoReducer from "./todoReducer";
// import todoReducer from '../ducks/todoDuck';
// import todoReducer from '../actions/todoAction';
import todoReducer from '../slices/todoSlice';
import fetchTodosReducer from '../actions/fetchTodosAction';


// combineReducers는 여러개의 Reducer를 하나로 합치는 역할 = rootReducer
const rootReducer = combineReducers({
    todo: todoReducer, // 각 state에 접근하기 위한 키 : todoReducer
    fetchTodos: fetchTodosReducer,
});

export default rootReducer;