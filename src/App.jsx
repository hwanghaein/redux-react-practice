import TodoApp from "./components/TodoApp";
// import TodoAppContainer from "./redux/containers/TodoAppContainer"; // Redux와 연결된 컴포넌트 가져오기

function App() {
  return (
    <div>
      <h1>My Redux Todo App</h1>
      <TodoApp /> 
    </div>
  );
}

export default App;
