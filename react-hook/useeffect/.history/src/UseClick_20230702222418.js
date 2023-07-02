import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
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
