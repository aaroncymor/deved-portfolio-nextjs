import { createContext, useContext, useState } from "react";

const Context = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Context.Provider
      value={[darkMode, setDarkMode]}
    >
      {children}
    </Context.Provider>
  );
};
export default ThemeProvider;

export const useThemeContext = () => useContext(Context);
