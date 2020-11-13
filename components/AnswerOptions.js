import React from "react";

function AnswerOptions({randomOption, visibility, handleClick, handleClickNext }) {
    return (
        <>
            <div>
                <div className="options">
                    {randomOption.map((answer, index) => (
                        <button className="option option-btn" key={answer.numericCode + index} value={answer.name} onClick={handleClick} >
                            {index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"} {answer.name}
                        </button>
                    ))}
                </div>
            </div>
            <button style={visibility} className="random-btn" onClick={handleClickNext}>Next</button>
        </>
    )
}

export default AnswerOptions;