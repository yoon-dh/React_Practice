import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((counter) => counter + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("fuck");
  useEffect(() => {
    console.log("call API");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log(`Search for ${keyword}`);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me </button>
    </div>
  );
}

export default App;
