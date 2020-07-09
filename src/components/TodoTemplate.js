import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <h1 className="title">To DO List</h1>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
