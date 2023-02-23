import React, { useEffect, useState } from 'react';

import './App.css';
import './footer.css';
import ClearButton from './clearbutton';
import { useThemeContext } from './themeProvider.js';

function counttodos(todo) {
  return {
    notCompleted: todo.filter((todo) => !todo.isChecked).length,
  };
}

// use effect to show whenever the array will change from completed todos to not completed
function TodoCounter(props) {
  const { todos, status, setStatus, setTodos } = props;

  const [notCompleted, setNotCompleted] = useState(0);

  const lightMode = useThemeContext();

  // filter between completed todos and not completed todos with cheackking the bolean status

  //with the useeffect hook set the todos on completed or not completed if sth changes on the todos
  useEffect(() => {
    const { notCompleted } = counttodos(todos);

    setNotCompleted(notCompleted);
  }, [todos]);

  function changeStatus(string) {
    setStatus(string);
  }
  // return all the todos as completed or not completed
  // create buttons to set the status of the todos wich should be showed
  // put as well the componen clearcompleted inside
  return (
    <div className="todoCounter">
      <p className="display"> {notCompleted} items left</p>

      <div className="counterButtons">
        <button
          onClick={() => changeStatus('All')}
          className={`button ${status === 'All' ? 'btnClicked' : ''}  ${
            lightMode ? 'buttonLight' : ''
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeStatus('Active')}
          className={`button ${status === 'Active' ? 'btnClicked' : ''}  ${
            lightMode ? 'buttonLight' : ''
          }`}
        >
          Active
        </button>
        <button
          onClick={() => changeStatus('Completed')}
          className={`button ${status === 'Completed' ? 'btnClicked' : ''}  ${
            lightMode ? 'buttonLight' : ''
          }`}
        >
          Completed
        </button>
      </div>

      <ClearButton todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoCounter;
