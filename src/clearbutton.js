import './App.css';
import './clearButton.css';

function ClearButton(props) {
  const { setTodos, todos } = props;

  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.isChecked);
    console.log(activeTodos);
    setTodos(activeTodos);
  }

  return (
    <button onClick={() => clearCompleted()} className="buttonClear">
      clear Completed
    </button>
  );
}

export default ClearButton;
