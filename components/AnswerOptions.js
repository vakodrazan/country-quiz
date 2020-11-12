import React from "react";

function AnswerOptions({goodGuess, randomOption, visibility, handleClick, handleClickNext }) {
    return (
        <>
            <div>
                <p><strong>Score: </strong> {goodGuess}</p>
                <div className="options">
                    {randomOption.map(answer => (
                        <button className="option option-btn" key={answer.numericCode} value={answer.name} onClick={handleClick} >{answer.name}</button>
                    ))}
                </div>
            </div>
            <button style={visibility} className="random-btn" onClick={handleClickNext}>Next</button>
        </>
    )
}

export default AnswerOptions;