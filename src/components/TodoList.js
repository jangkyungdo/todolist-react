import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, allRemove, selectRemove }) => {
  return (
    <>
      <table className="TodoList">
        <colgroup>
          <col width="10%" />
          <col width="80%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th>Check</th>
            <th>Todo List</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className="button-box">
        <button onClick={selectRemove}>선택 삭제</button>
        <button onClick={allRemove}>전체 삭제</button>
      </div>
    </>
  );
};

export default TodoList;
