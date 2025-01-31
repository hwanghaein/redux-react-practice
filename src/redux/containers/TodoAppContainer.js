import { connect } from "react-redux";

// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../actions";
import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../ducks/todoDock";

import TodoApp from "../../components/TodoApp";

// state를 리액트 컴포넌트의 props로 연결시켜주는 역할을 하는 함수 // ownProps는 옵션임
function mapStateToProps(state) {
  return {
    todoItems: [...state.todo, ...(state.fetchTodos?.data || [])], // ✅ `fetchTodos`가 없으면 빈 배열 사용
  };
}


// dispatch를 리액트 컴포넌트의 props로 연결시켜주는 역할을 하는 함수 // ownProps는 옵션임
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
  };
}

// 두개의 함수를 connect 함수의 인자로 넣어서 호출하고, (이때 Wrapper Function가 return되는데 이걸 사용하면 어떤 컴포넌트든지 Container 컴포넌트로 만들 수 있음)
// Wrapper Function을 통해 Redux와 TodoApp컴포넌트를 연결하면 Container 컴포넌트가 return된다.
// Container는 리덕스의 일부 state와 dispatch를 포함하는 리액트 컴포넌트임

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
