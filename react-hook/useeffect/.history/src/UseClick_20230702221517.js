import { useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  return element;
};

function UseClick() {
  const title = useClick();
  return (
    <div>
      <h1 ref={title}>useClick</h1>
      <input type="text" placeholder="la" />
    </div>
  );
}

export default UseClick;
