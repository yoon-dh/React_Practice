import { useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  return element;
};

function UseClick() {
  return (
    <div>
      <h1>useClick</h1>
      <input type="text" placeholder="la" />
    </div>
  );
}

export default UseClick;
