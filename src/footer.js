import React, { useEffect, useState } from 'react';

import './App.css';
import './footer.css';

function counttodos(todo) {
  return {
    notCompleted: todo.filter((todo) => !todo.isChecked).length,
  };
}

// use effect to show whenever the array will change from completed todos to not completed
function TodoCounter(props) {
  const { todos, status, setStatus } = props;

  const [notCompleted, setNotCompleted] = useState(0);

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
  // create buttons to set the status of the todos wich shoudl be showed
  return (
    <div className="footerButtons">
      <p> {notCompleted} items left</p>

      <button
        disabled={status == 'All'}
        onClick={() => changeStatus('All')}
        className="button"
      >
        All
      </button>
      <button
        disabled={status == 'Active'}
        onClick={() => changeStatus('Active')}
        className="button"
      >
        Active
      </button>
      <button
        disabled={status == 'Completed'}
        onClick={() => changeStatus('Completed')}
        className="button"
      >
        Completed
      </button>
    </div>
  );
}

export default TodoCounter;
