import "./InitTextEditor.css";
import { BsFillCaretRightFill } from "react-icons/bs";

function InitTextEditor({ onEditorClick }) {
    return (
        <button className="btn btn-dark BlackBtn" onClick={onEditorClick}>
            Init Text Editor
            <BsFillCaretRightFill className="ArrowIcon" />
        </button>
    );
}

export default InitTextEditor;
