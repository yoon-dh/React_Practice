import { useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
};

function UseTitle() {
  return (
    <div>
      <h1>useTitle</h1>
    </div>
  );
}

export default UseTitle;
