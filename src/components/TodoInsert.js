import React, { useState, useCallback } from "react";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <>
      <form className="TodoInsert">
        <input type="text" placeholder="이름을 입력해주세요."></input>
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