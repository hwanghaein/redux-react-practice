import { ACTION_TYPE_ADD_TODO, ACTION_TYPE_REMOVE_ALL, ACTION_TYPE_REMOVE_TODO } from "../actions";


// 초기화
const initialState = [];

// todoReducer 함수: 상태가 어떻게 변경될지를 정의하는 함수이다.
function todoReducer(state = initialState, action) {
  switch (action.type) {
      case ACTION_TYPE_ADD_TODO:
          return state.concat(action.text);
      case ACTION_TYPE_REMOVE_TODO:
          return state.slice(0, -1);
      case ACTION_TYPE_REMOVE_ALL:
          return [];
      default:
          return state;
  }
}

export default todoReducer;