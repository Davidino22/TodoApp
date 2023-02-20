import React, { useState, useContext, createContext, Children } from 'react';

const themeContext = createContext();
const toggleContext = createContext();

function ThemeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);

  function toggle() {
    setLightMode(!lightMode);
  }

  return (
    <themeContext.Provider value={lightMode}>
      <toggleContext.Provider value={toggle}>{children}</toggleContext.Provider>
    </themeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(themeContext);
}
export function useToggleThemeContext() {
  return useContext(toggleContext);
}

export default ThemeProvider;
