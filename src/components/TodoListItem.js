import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text } = todo;

  return (
    <tr className="TodoListItem">
      <td>
        <input type="checkbox" onClick={() => onToggle(id)}></input>
      </td>
      <td className="text">{text}</td>
      <td className="delete" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </td>
    </tr>
  );
};

export default TodoListItem;
