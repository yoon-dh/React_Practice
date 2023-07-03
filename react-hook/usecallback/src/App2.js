import { useCallback, useState } from "react";
import Box from "./Box";

function App2() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={(e) => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default App2;
