import { BsArrowsMove } from "react-icons/bs";

function AddQuestionGroup({ onClick }) {
    return (
        <button className="btn btn-primary Blue" onClick={onClick}>
            Add Question Group
            <BsArrowsMove className="MoveIcon" />
        </button>
    );
}

export default AddQuestionGroup;
