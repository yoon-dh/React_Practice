import { useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  return setTitle;
};

function UseTitle() {
  const titleUpdater = useTitle("Loading...");
  return (
    <div>
      <h1>useTitle</h1>
    </div>
  );
}

export default UseTitle;
