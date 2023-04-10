import AddQuestionGroup from "./components/AddQuestionGroup/AddQuestionGroup";

import QuestionView from "./components/QuestionView/QuestionView";

import { useState } from "react";

function App() {
    const [qViews, setQViews] = useState([]);

    const handleqViewClick = () => {
        setQViews([
            ...qViews,
            <QuestionView
                key={qViews.length}
                onClick={() => {
                    setQViews(
                        qViews.filter((qView) => qView.key !== qViews.length)
                    );
                }}
            />,
        ]);
    };

    return (
        <>
            <div className="container">
                <AddQuestionGroup onClick={handleqViewClick} />
                {qViews}
            </div>
        </>
    );
}

export default App;
