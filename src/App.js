import React, { useEffect, useState } from 'react';
import './App.css';
import InputTodos from './input.js';
import ListTodos from './list.js';
import TodoCounter from './footer.js';
import ClearButton from './clearbutton.js';

function App() {
  // create usestates for todos and status and filterettodos
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterettodos, setFilterettodos] = useState([]);

  // create useffect to show wich status should be rendered in order to see the Todos
  useEffect(() => {
    switch (status) {
      case 'All':
        setFilterettodos(todos);
        break;
      case 'Active':
        setFilterettodos(todos.filter((todos) => !todos.isChecked));
        break;
      case 'Completed':
        setFilterettodos(todos.filter((todos) => todos.isChecked));
        break;
    }
  }, [todos, status]);

  // render all components i have in diffrent files
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <InputTodos todos={todos} setTodos={setTodos} />
        </div>
        <div className="containerMid">
          <ListTodos
            todos={todos}
            setTodos={setTodos}
            filterettodos={filterettodos}
          />
        </div>
        <div className="footer">
          <TodoCounter todos={todos} status={status} setStatus={setStatus} />
        </div>
        <div className="buttonClearCompleted">
          <ClearButton setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
