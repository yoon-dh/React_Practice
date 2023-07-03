import { useState } from "react";
import Page from "./components/Page";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </ThemeContext.Provider>
  );
}

export default App;
