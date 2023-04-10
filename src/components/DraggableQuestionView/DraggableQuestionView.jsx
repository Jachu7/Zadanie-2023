import QuestionView from "../QuestionView/QuestionView";

function DraggableQuestionView(props) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: "questionView" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
        >
            <QuestionView {...props} />
        </div>
    );
}

export default DraggableQuestionView;
