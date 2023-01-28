import Header from "../components/Header";
import Footer from "../components/Footer";
import TransitionWrapper from "../components/TransitionWrapper";

import { useThemeContext } from "../context/theme";

const Layout = ({ containerRef, children }) => {
  const { theme } = useThemeContext();
  const [darkMode, setDarkMode] = theme;

  return (
    <div className={darkMode ? "app dark": "app"}>
      <div className="app__controller" data-scroll-container ref={containerRef}>
        <main>
          {/* <ScrollTriggerProxy /> */}
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          {children}
          <Footer
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </main>
      </div>
      {/*<TransitionWrapper />*/}
    </div>
  );
};

export default Layout;
