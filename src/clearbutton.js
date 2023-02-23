import './App.css';
import './clearButton.css';
import { useThemeContext } from './themeProvider.js';

function ClearButton(props) {
  const { setTodos, todos } = props;
  const lightMode = useThemeContext();

  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.isChecked);
    console.log(activeTodos);
    setTodos(activeTodos);
  }

  return (
    <button
      onClick={() => clearCompleted()}
      className={`buttonClear ${lightMode ? 'buttonClearLight' : ''}`}
    >
      clear Completed
    </button>
  );
}

export default ClearButton;
