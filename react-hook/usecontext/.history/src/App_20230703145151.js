import { useState } from "react";
import Page from "./components/Page";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </ThemeContext.Provider>
  );
}

export default App;
