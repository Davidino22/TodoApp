import React, { useState } from 'react';
import './todo.css';
import { FcCheckmark } from 'react-icons/fc';
import { BiTrash } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { BiSave } from 'react-icons/bi';

// set one use State to signify if we are editing. As well to edit the input, new usestate
// take mutltiple props to work with

function Todo(props) {
  const { deleteTodo, handleCheckboxClick, todos, index, todo, setTodos } =
    props;
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(todo.value);

  // change boolean gor ternary operator
  function toggleInput() {
    setEditing(!editing);
  }

  // save new added value and map over array todos to set the todo value input
  function saveValue(e) {
    e.preventDefault();
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          value: input,
        };
      } else {
        return item;
      }
    });
    setTodos(updatedTodos);
    setEditing(false);
  }

  // working with ternary operator to work with input if needed
  // one button for saving new input
  // one button to delete todo
  // one button to mark todo as completed
  // one button to edit new todo
  // the buttons for edit, delete and complete have their own onclick handlers

  return (
    <li className="todo">
      {!editing ? (
        <span
          style={{
            color: todo.isChecked ? 'red' : 'white',
            textDecoration: todo.isChecked ? 'line-through' : 'none',
          }}
        >
          {todo.value}
        </span>
      ) : (
        <form onSubmit={saveValue} className="todoForm">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
          <button type="submit">
            <BiSave />
          </button>
        </form>
      )}

      <button onClick={() => deleteTodo(index)}>
        <BiTrash />
      </button>
      <button onClick={() => handleCheckboxClick(index)}>
        <FcCheckmark />
      </button>
      <button onClick={() => toggleInput()}>
        <BiPencil />
      </button>
    </li>
  );
}

export default Todo;
