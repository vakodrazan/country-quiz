import React from "react";

function TryAgain({goodGuess, setIsCorrect, fetchData}) {
    return (
        <>
            <h2>Results</h2>
            <p>
                You got <span>{goodGuess}</span> score
            </p>
            <button
                onClick={() => {
                    setIsCorrect(true)
                    fetchData()
                }}
            >
                Try Again
            </button>
        </>
    )
}

export default TryAgain;