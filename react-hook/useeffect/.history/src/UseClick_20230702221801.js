import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  });
  return element;
};

function UseClick() {
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>useClick</h1>
      <input type="text" placeholder="la" />
    </div>
  );
}

export default UseClick;
