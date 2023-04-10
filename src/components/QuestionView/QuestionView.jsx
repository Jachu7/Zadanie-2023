import React, { useState } from "react";
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

function QuestionView() {
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
                    setCViews(
                        cViews.filter((cView) => cView.key !== cViews.length)
                    );
                }}
            />,
        ]);
    };

    return (
        <div className={`container mt-4 mb-4 ${showElement ? "" : "hidden"}`}>
            <div className="row">
                <div className="col-12 p-0">
                    <div
                        className="blue-view-container"
                        onSubmit={formPreventDefault}
                    >
                        <form onSubmit={formPreventDefault}>
                            <div
                                draggable
                                className="bg-view text-white p-2 Header"
                            >
                                <div className="Q-group">
                                    <span>
                                        <BsArrowsMove
                                            className="grab"
                                            size={28}
                                        />
                                    </span>
                                    <span>Question group</span>
                                </div>
                                <div className="Q-input">
                                    <input
                                        type="text"
                                        className="Q-input-text"
                                        placeholder="Title of question group #1"
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
                                <p className="mt-4 mb-1">
                                    Question group intro
                                </p>
                                <InitTextEditor
                                    onEditorClick={handleEditorClick}
                                />
                            </div>
                            {showEditor && (
                                <Editor
                                    wrapperClassName={`wysiwyg ${toggleClass}`}
                                    editorClassName="editor"
                                    toolbarClassName="toolbar"
                                    className={`${toggleClass} wysiwyg`}
                                />
                            )}
                        </form>
                        <div className={`pdl pdr pb-4 ${toggleClass} addcat`}>
                            <AddCategory onClick={handlecViewClick} />
                            {cViews}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionView;