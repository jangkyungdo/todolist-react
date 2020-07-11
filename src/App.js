import React, { useState, useCallback, useRef, useEffect } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoStatus from './components/TodoStatus';

const App = () => {
  const [todos, setTodos] = useState([]);
  const USER_LOCALSTORAGE = 'todos';

  // const nextId = todos.length + 1;
  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const nextTodos = {
        // id: nextId,
        id: nextId.current,
        text,
        checked: true,
      };
      console.log(todos);
      setTodos(todos.concat(nextTodos));
      console.log(todos);
      saveLocalStorage();
      nextId.current += 1;
      console.log(todos.length);
    },
    [todos]
  );

  const saveLocalStorage = () => {
    localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(todos));
  };

  useEffect(() => {
    console.log('마운트');
    const readLocalStorage = localStorage.getItem(USER_LOCALSTORAGE);
    if (readLocalStorage == null) {
      return;
    }
    const prasedTodos = JSON.parse(readLocalStorage);
    console.log(prasedTodos);
    setTodos(prasedTodos);
  }, []);

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      saveLocalStorage();
    },
    [todos]
  );

  const allRemove = useCallback(() => {
    setTodos([]);
    localStorage.removeItem(USER_LOCALSTORAGE);
  }, []);

  const selectRemove = useCallback(() => {
    setTodos(todos.filter((todo) => todo.checked));
    saveLocalStorage();
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
      <TodoInsert onInsert={onInsert} onToggle={onToggle} todos={todos} />
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
