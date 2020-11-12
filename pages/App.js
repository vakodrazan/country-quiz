import React from "react";
import AnswerOptions from "../components/AnswerOptions";
import Questions from "../components/Questions";
import Results from "../components/Results";
import useCountryQuiz from "./useCountryQuiz";

function App() {
    const [countryQuiz,
        random,
        correctAnswer,
        goodGuess,
        randomOption,
        visibility,
        setGoodGuess,
        setIsCorrect,
        handleClick,
        fetchData,
        handleClickNext
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
                                    visibility={visibility}
                                    handleClick={handleClick} 
                                    handleClickNext={handleClickNext}
                                />
                            </>
                        ) 
                        : <Results 
                            goodGuess={goodGuess} 
                            setGoodGuess={setGoodGuess}
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
