import React, { useCallback } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = () => {
  return (
    <tr className="TodoListItem">
      <td>
        <input type="checkbox"></input>
      </td>
      <td className="text">{text}</td>
      <td className="delete">
        <MdRemoveCircleOutline />
      </td>
    </tr>
  );
};

export default TodoListItem;
