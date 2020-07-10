import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoStatus from './components/TodoStatus';

const App = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const nextTodos = {
        id: nextId.current,
        text,
        checked: true,
      };
      setTodos(todos.concat(nextTodos));
      nextId.current += 1;
      console.log(todos.length);
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
    setTodos(todos.filter((todo) => todo.checked));
  }, [todos]);

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
      console.log(todos);
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoStatus todos={todos} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        allRemove={allRemove}
        selectRemove={selectRemove}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
};

export default App;
