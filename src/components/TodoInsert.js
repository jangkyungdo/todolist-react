import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert, onToggle, todos }) => {
  const { id } = todos;
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const USER_LOCALSTORAGE = 'userName';
  const currentUser = localStorage.getItem(USER_LOCALSTORAGE);

  // const currentUser = useEffect(() => {
  //   localStorage.getItem(USER_LOCALSTORAGE);
  // }, [name]);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [value]
  );

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onSubmitName = useCallback(
    (e) => {
      e.preventDefault();
      localStorage.setItem(USER_LOCALSTORAGE, name);
      setName('');
      onToggle(id);
    },
    [name]
  );

  return (
    <>
      <form className="TodoInsert" onSubmit={onSubmitName}>
        <input
          className="TodoInsert__name"
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="이름을 입력해주세요."
        ></input>
        <h2>{currentUser}</h2>
        <button type="submit">변경</button>
      </form>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="할 일을 입력해주세요."
        ></input>
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoInsert;
