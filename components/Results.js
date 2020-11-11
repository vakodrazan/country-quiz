import React from "react";

// Get this result when the guess is wrong
function Results({goodGuess, setGoodGuess, setIsCorrect, fetchData}) {
    return (
        <>
            <h2>Results</h2>
            <p>
                You got <span>{goodGuess}</span> correct answers
            </p>
            <button
                onClick={() => {
                    setIsCorrect(true)
                    fetchData()
                    setGoodGuess(0)
                }}
            >
                Try Again
            </button>
        </>
    )
}

export default Results;