import React from "react";

// List of the button for the answer options
function AnswerOptions({randomOption, visibility, handleClick, handleClickNext }) {
    return (
        <>
            <div>
                <div className="options">
                    {randomOption.map((answer, index) => (
                        <button className="option option-btn" key={answer.numericCode + index} value={answer.name} onClick={handleClick} >{answer.name}</button>
                    ))}
                </div>
            </div>
            <button style={visibility} className="random-btn" onClick={handleClickNext}>Next</button>
        </>
    )
}

export default AnswerOptions;