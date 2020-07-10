import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const nextTodos = {
        id: nextId.current,
        text,
      };
      setTodos(todos.concat(nextTodos));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const allRemove = useCallback(() => {
    setTodos([]);
  }, []);

  const selectRemove = useCallback(() => {
    setTodos(todos.filter((todo) => !todo.checked));
  }, []);

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
