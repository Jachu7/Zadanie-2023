import React, { useState, useEffect } from "react";
import {
  BsArrowsMove,
  BsFillDashCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import InitTextEditor from "../InitTextEditor/InitTextEditor";
import "./QuestionView.css";
import AddCategory from "../AddCategory/AddCategory";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CategoryView from "../CategoryView/CategoryView";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SubmitForm from "../SubmitForm/SubmitForm";

function QuestionView(props) {
  const { id } = props;
  // Wysiwyg editor
  const [showEditor, setShowEditor] = useState(false);

  function handleEditorClick() {
    setShowEditor(!showEditor);
  }

  // Toggle, hide section
  const [toggleClass, setToggleClass] = useState("");

  function handleToggleClick() {
    setToggleClass(toggleClass === "" ? "tgl1" : "");
  }

  // Remove goofy ahh whole section
  const [showElement, setShowElement] = useState(true);

  function handleRemoveClick() {
    setShowElement(false);
  }

  // Stop form from submitting
  function formPreventDefault(e) {
    e.preventDefault();
  }

  // Show AddCategory
  const [cViews, setCViews] = useState([]);

  const handlecViewClick = () => {
    setCViews([
      ...cViews,
      <CategoryView
        key={cViews.length}
        onClick={() => {
          setCViews(cViews.filter((cView) => cView.key !== cViews.length));
        }}
        draggable={true}
      />,
    ]);
  };

  // Drag and drop
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(cViews);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCViews(items);
  };

  function showWysiwygValue() {
    const editor = document.querySelector("#myEditor");
    if (editor) {
      console.log(editor.textContent);
    } else {
      console.log("Editor not found");
    }
  }

  return (
    <div className={`container mt-4 mb-4 ${showElement ? "" : "hidden"}`}>
      <div className="row">
        <div className="col-12 p-0">
          <div className="blue-view-container" onSubmit={formPreventDefault}>
            <form onSubmit={formPreventDefault}>
              <div draggable className="bg-view text-white p-2 Header">
                <div className="Q-group">
                  <span>
                    <BsArrowsMove className="grab" size={28} />
                  </span>
                  <span>Question group</span>
                </div>
                <div className="Q-input">
                  <input
                    type="text"
                    className="Q-input-text"
                    placeholder={`Title of the question group-${id + 1}`}
                  />
                </div>
                <div className="Q-btns mx-2">
                  <BsFillDashCircleFill
                    className="clickable"
                    onClick={handleRemoveClick}
                  />
                  <BsFillArrowUpCircleFill
                    className="clickable"
                    onClick={handleToggleClick}
                  />
                </div>
              </div>
              <div className={`pdl ${toggleClass}`}>
                <p className="mt-4 mb-1">Question group intro</p>
                <InitTextEditor onEditorClick={handleEditorClick} />
              </div>
              {showEditor && (
                <Editor
                  wrapperClassName={`wysiwyg ${toggleClass}`}
                  editorClassName="editor"
                  toolbarClassName="toolbar"
                  className={`${toggleClass} wysiwyg`}
                  id="myEditor"
                />
              )}
              <div className={`pdl pdr pb-4 ${toggleClass} addcat`}>
                <div className="relative">
                  <AddCategory onClick={handlecViewClick} />
                  <SubmitForm className="absolute" onClick={showWysiwygValue} />
                </div>
                <div>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="cViews">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {cViews.map((cView, index) => (
                            <Draggable
                              key={cView.key}
                              draggableId={cView.key}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {cView}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionView;
