import PropTypes from "prop-types";
import { useState } from "react";

function TodoApp(props) {
  const {
    // Redux state
    todoItems,
    // Redux dispatch
    addTodo,
    removeTodo,
    removeAll,
    triggerAsyncFunction,
    fetchTodo,
  } = props; // props를 통해서 가져올 수 있는 이유는 TodoApp을 리덕스에 connect 시켰기 때문이다.

  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h3>오늘 할 일</h3>
      {/* 할일 목록 */}
      <ul>
        {todoItems.map((todoItem, index) => {
          return <li key={index}>{todoItem}</li>;
        })}
      </ul>

      <div>
        <input
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          할 일 추가
        </button>
        <button onClick={removeTodo}>할 일 삭제</button>
        <button onClick={removeAll}>모두 삭제</button>
      </div>

      <button
        onClick={() => {
          triggerAsyncFunction((dispatch, getState) => {
            console.log(`비동기 함수 실행`, getState());

            new Promise((resolve) => {
              setTimeout(resolve, 3000);
            })
              .then(() => {
                console.log(`비동기 함수 성공`, getState());
              })
              .finally(() => {
                console.log(`비동기 함수 종료`, getState());
              });
          });
        }}
      >
        비동기 함수 테스트
      </button>

      <button
        onClick={fetchTodo}
      >
        서버에서 할 일 목록 받아오기
      </button>
    </div>
  );
}

TodoApp.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired,
  triggerAsyncFunction: PropTypes.func,
  fetchTodo: PropTypes.func,
};

export default TodoApp;
