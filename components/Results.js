import React, { useContext } from "react";
import { Context } from "../pages/Context";
import winnerAdventure from "../undraw_winners_ao2o 2.svg"

// Get this result when the guess is wrong
function Results() {
    const { goodGuess, setGoodGuess, setIsCorrect, fetchData } = useContext(Context)
    return (
        <section className="final-result">
            <header>
                <img src={winnerAdventure} alt="Winner Adventure" />
                <h2>Results</h2>
            </header>
            <p className="scoreGuess">
                You got <span className="score">{goodGuess}</span> correct {goodGuess < 2 ? "answer" : "answers"}
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