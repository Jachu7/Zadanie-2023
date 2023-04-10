import { BsArrowsMove } from "react-icons/bs";

function AddCategory({ onClick }) {
    return (
        <button className="btn btn-primary Blue" onClick={onClick}>
            Add Category
            <BsArrowsMove className="MoveIcon" />
        </button>
    );
}

export default AddCategory;
