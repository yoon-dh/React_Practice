import { useState } from "react";
import Page from "./components/Page";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.provider>
      <div className="App">
        <Page isDark={isDark} setIsDark={setIsDark} />
      </div>
    </ThemeContext.provider>
  );
}

export default App;
