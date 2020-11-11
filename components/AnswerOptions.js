import React from "react";

function AnswerOptions({goodGuess, randomOption, isCorrect, handleClick, setCountryQuiz }) {
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
            {isCorrect === false 
            ? <button onClick={() => setCountryQuiz(null)}>Random</button>
            : null
            }
        </>
    )
}

export default AnswerOptions;