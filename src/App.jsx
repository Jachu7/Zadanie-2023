import AddQuestionGroup from "./components/AddQuestionGroup/AddQuestionGroup";
import QuestionView from "./components/QuestionView/QuestionView";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [qViews, setQViews] = useState([]);

  const handleqViewClick = () => {
    setQViews([
      ...qViews,
      <QuestionView
        key={qViews.length}
        onClick={() => {
          setQViews(qViews.filter((qView) => qView.key !== qViews.length));
        }}
      />,
    ]);
  };

  useEffect(() => {
    const items = document.querySelectorAll(".sortable-list li");
    const sortableList = document.querySelector(".sortable-list");

    items.forEach((item) => {
      item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
      });
      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
      });
    });

    const initSortableList = (e) => {
      e.preventDefault();
      const draggingItem = document.querySelector(".dragging");

      let siblings = [...sortableList.querySelectorAll("li:not(.dragging)")];

      let nextSibling = siblings.find((sibling) => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
      });

      sortableList.insertBefore(draggingItem, nextSibling);
    };

    sortableList.addEventListener("dragover", (e) => {
      e.preventDefault();
      initSortableList(e);
    });
  }, [qViews]);

  return (
    <>
      <div className="container">
        <AddQuestionGroup onClick={handleqViewClick} />
        <ul className="sortable-list">{qViews}</ul>
      </div>
    </>
  );
}

export default App;
