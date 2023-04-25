import { BsCheckSquareFill } from "react-icons/bs";

function SubmitForm({ onClick }) {
  return (
    <button
      className="btn btn-primary Blue"
      style={{ position: "absolute", right: "0" }}
      onClick={onClick}
    >
      Submit Form
      <BsCheckSquareFill style={{ marginLeft: "5px" }} />
    </button>
  );
}

export default SubmitForm;
