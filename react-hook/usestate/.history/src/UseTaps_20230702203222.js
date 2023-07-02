import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "i'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "i'm the content of the Section 2",
  },
];

function UseInput() {
  return (
    <div>
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
}

export default UseInput;
