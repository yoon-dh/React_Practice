import { useState } from "react";

function App2() {
  const [size, setSizes] = useState(100);

  const createBoxStyle = () => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      hieght: `${size}px`,
    };
  };
}
