import React from "react";
import { ThemeProvider } from "./themecontext";
import ThemeToggler from "./themetoggler";

const ThemeApp = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Welcome to the Theme App!</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

export default ThemeApp;