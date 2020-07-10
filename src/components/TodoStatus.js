import React from 'react';
import './TodoStatus.scss';

const TodoStatus = ({ todos }) => {
  const complete = todos.filter((todo) => !todo.checked);
  const inComplete = todos.filter((todo) => todo.checked);
  return (
    <div className="TodoStatus">
      <div>총 : {todos.length}건</div>
      <div>완료 : {complete.length}건</div>
      <div>미완료 : {inComplete.length}건</div>
    </div>
  );
};

export default TodoStatus;
