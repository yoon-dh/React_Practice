import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        DarkMode
      </button>
    </footer>
  );
}

export default Footer;
