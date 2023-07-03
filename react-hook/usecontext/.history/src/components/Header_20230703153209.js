import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Header() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {value}!</h1>
    </header>
  );
}

export default Header;
