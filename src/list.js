import React from 'react';
import './App.css';
import Todo from './todo.js';
import './list.css';

// render function where i map over the Todo array to create list items in an unorder list
function ListTodos(props) {
  const { todos, setTodos, filterettodos } = props;

  // delete selcted value by index
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  // change the color after checkbox is checked
  const handleCheckboxClick = (index) => {
    const newTodo = [...todos];
    newTodo[index].isChecked = !newTodo[index].isChecked;
    setTodos(newTodo);
  };

  //return over  filtered todos. Todo is a component
  return (
    <div className="todolist">
      <ul>
        {filterettodos.map((item, index) => (
          <Todo
            todo={item}
            index={index}
            handleCheckboxClick={handleCheckboxClick}
            deleteTodo={deleteTodo}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListTodos;
