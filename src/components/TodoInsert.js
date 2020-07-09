import React, { useState, useCallback } from "react";
import "./TodoInsert.scss";

const TodoInsert = () => {
  return (
    <>
      <form className="TodoInsert">
        <input type="text" placeholder="이름을 입력해주세요."></input>
        <button type="submit">변경</button>
      </form>
      <form className="TodoInsert">
        <input type="text" placeholder="할 일을 입력해주세요."></input>
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoInsert;
