import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Page() {
  const data = useContext(ThemeContext);
  return (
    <div className="Page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Page;
