import AddQuestionGroup from "../AddQuestionGroup/AddQuestionGroup";
import QuestionView from "../QuestionView/QuestionView";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { logout, isLoggedIn } from "../../login";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [qViews, setQViews] = useState([]);

  const handleqViewClick = () => {
    setQViews([
      ...qViews,
      <QuestionView
        key={qViews.length}
        id={qViews.length}
        onClick={() => {
          setQViews(qViews.filter((qView) => qView.key !== qViews.length));
        }}
        draggable={true}
      />,
    ]);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(qViews);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setQViews(items);
  };

  return (
    <>
      <div className="container">
        <AddQuestionGroup onClick={handleqViewClick} />
        <button onClick={logout}>Log out</button>
      </div>
      <div className="container">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {qViews.map((qView, index) => (
                  <Draggable
                    key={qView.key}
                    draggableId={`${qView.key}`}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {qView}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default Home;
