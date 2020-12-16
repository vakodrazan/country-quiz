import React, { useContext } from "react";
import { Context } from "../pages/Context";

// List of the button for the answer options
function AnswerOptions() {
    const { randomOption, visibility, handleClick, handleClickNext } = useContext(Context)
    return (
        <>
            <div>
                <div className="options">
                    {randomOption.map((answer, index) => (
                        <button className="option option-btn" key={answer.numericCode + index} value={answer.name} onClick={handleClick} ><span>{index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D" }</span> <span>{answer.name}</span></button>
                    ))}
                </div>
            </div>
            <div className="next-button-container">
                <button style={visibility} className="random-btn" onClick={handleClickNext}>Next</button>
            </div>
        </>
    )
}

export default AnswerOptions;