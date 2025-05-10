import React, { createContext, useState } from "react";


// Create the context
const ThemeContext = createContext();

// Create the provider component
const ThemeProvider = ({ children }) => {
  // Initialize state
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };


