import Header from "../components/Header";
import Footer from "../components/Footer";

import { useThemeContext } from "../context/theme";

const Layout = ({children}) => {
  const [darkMode, setDarkMode] = useThemeContext();

  const baseLayoutClass = darkMode ? "dark" : "";

  return (
    <div className={baseLayoutClass}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
