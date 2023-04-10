import "./BlueBtn.css";
import { BsArrowsMove } from "react-icons/bs";

function BlueBtn(props) {
    return (
        <button className="btn btn-primary Blue">
            {props.tekst}
            <BsArrowsMove className="MoveIcon" />
        </button>
    );
}

export default BlueBtn;
