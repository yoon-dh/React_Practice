import { useState } from "react";

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);

  return <div className="App"></div>;
}

export default App;
