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

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
  };
};

function UseTaps() {
  const tabs = useTabs(0, content);
  return (
    <div>
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
}

export default UseTaps;
