import React, { useState } from "react";
import {
  BsArrowsMove,
  BsFillDashCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import InitTextEditor from "../InitTextEditor/InitTextEditor";
import "./CategoryView.css";
import AddQuestion from "../AddQuestion/AddQuestion";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function CategoryView() {
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

  if (!showElement) {
    return null;
  }

  // Stop form from submitting
  function formPreventDefault(e) {
    e.preventDefault();
  }

  return (
    <li className={`container mt-4 mb-4 ${showElement ? "" : "hidden"}`}>
      <div className="row">
        <div className="col-12 p-0">
          <div className="blue-view-container" onSubmit={formPreventDefault}>
            <div draggable className="bg-view text-white p-2 Header">
              <div className="Q-group">
                <span>
                  <BsArrowsMove className="grab" size={28} />
                </span>
                <span>Category</span>
              </div>
              <div className="C-input">
                <input type="text" className="C-input-text" />
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
              <p className="mt-4 mb-1">Category intro</p>
              <InitTextEditor onEditorClick={handleEditorClick} />
            </div>
            {showEditor && (
              <Editor
                wrapperClassName={`wysiwyg ${toggleClass}`}
                editorClassName="editor"
                toolbarClassName="toolbar"
                className={`${toggleClass} wysiwyg`}
              />
            )}
            <div className={`pdl pb-4 ${toggleClass} addcat`}>
              <AddQuestion />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CategoryView;
