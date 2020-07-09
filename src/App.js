import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        allRemove={allRemove}
        selectRemove={selectRemove}
      />
    </TodoTemplate>
  );
};

export default App;
