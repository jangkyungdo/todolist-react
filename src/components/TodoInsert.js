import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert, onToggle, todos }) => {
  const { id } = todos;
  const [form, setForm] = useState({ name: '', todo: '' });
  const [className, setClassName] = useState(true);
  const USER_LOCALSTORAGE = 'userName';
  const currentUser = localStorage.getItem(USER_LOCALSTORAGE);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(form.todo);
      // setValue('');
      setForm({
        ...form,
        todo: '',
      });
      e.preventDefault();
    },
    [form]
  );

  const onSubmitName = useCallback(
    (e) => {
      e.preventDefault();
      setClassName(!className);
      localStorage.setItem(USER_LOCALSTORAGE, form.name);
      // setName('');
      setForm({
        ...form,
        name: '',
      });
      onToggle(id);
    },
    [form]
  );

  return (
    <>
      <form className="TodoInsert" onSubmit={onSubmitName}>
        <input
          className={className ? 'showing' : ''}
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}
          placeholder="이름을 입력해주세요."
        ></input>
        <h2 className={className ? '' : 'showing'}>
          {currentUser}님 안녕하세요.
        </h2>
        <button type="submit">변경</button>
      </form>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          className="showing"
          type="text"
          name="todo"
          value={form.todo}
          onChange={onChange}
          placeholder="할 일을 입력해주세요."
        ></input>
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoInsert;
