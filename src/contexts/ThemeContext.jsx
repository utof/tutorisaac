import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  console.log(ThemeContext);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  return value;
}

export default ThemeProvider;

// a = 3

// function hello {

//     a = {5, 3}

// }

// function {

//     value = a
// }
