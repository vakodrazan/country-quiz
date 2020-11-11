import React, { useEffect, useState } from "react";
import AnswerOptions from "../components/AnswerOptions";
import Questions from "../components/Questions";
import TryAgain from "../components/TryAgain";
import useCountryQuiz from "./useCountryQuiz";

function App() {
    const [countryQuiz,
        random,
        correctAnswer,
        goodGuess,
        randomOption,
        isCorrect,
        setCountryQuiz,
        setIsCorrect,
        handleClick,
        fetchData
    ] = useCountryQuiz();

    return (
        <div className="container">
            <main>
                <h1>Country Quiz</h1>
                <article className="article">
                    {countryQuiz 
                        ? (
                            <>
                                <Questions random={random} correctAnswer={correctAnswer} />
                                <AnswerOptions 
                                    goodGuess={goodGuess} 
                                    randomOption={randomOption} 
                                    isCorrect={isCorrect}
                                     handleClick={handleClick} 
                                    setCountryQuiz={setCountryQuiz} 
                                />
                            </>
                        ) 
                        : <TryAgain 
                            goodGuess={goodGuess} 
                            setIsCorrect={setIsCorrect} 
                            fetchData={fetchData} 
                        /> 
                    }
                </article>
            </main>
        </div>
    )
}

export default App;
