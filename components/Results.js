import React from "react";
import winnerAdventure from "../undraw_winners_ao2o 2.svg"

// Get this result when the guess is wrong
function Results({goodGuess, setGoodGuess, setIsCorrect, fetchData}) {
    return (
        <section className="final-result">
            <header>
                <img src={winnerAdventure} alt="Winner Adventure" />
                <h2>Results</h2>
            </header>
            <p>
                You got <span>{goodGuess}</span> correct answers
            </p>
            <button
                className="recommendation-btn"
                onClick={() => {
                    setIsCorrect(true)
                    fetchData()
                    setGoodGuess(0)
                }}
            >
                Try Again
            </button>
        </section>
    )
}

export default Results;