import React from 'react';
import './App.css';
import ThemeProvider from './themeProvider.js';
import TodoApp from './todoApp.js';

function App() {
  // render all components i have in diffrent files
  return (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;
