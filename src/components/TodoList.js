import React from 'react';
import './TodoList.scss';

const TodoList = () => {
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
        <tbody>
          {/* <tr>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
          </tr> */}
        </tbody>
      </table>
      <div className="button-box">
        <button>선택 삭제</button>
        <button>전체 삭제</button>
      </div>
    </>
  );
};

export default TodoList;
