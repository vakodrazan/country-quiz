import React, { useEffect, useState } from "react";
import Questions from "../components/Questions";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);
    let [randomOption, setRandomOption] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState({});
    const [random, setRandom] = useState(0);
    const [goodGuess, setGoodGuess] = useState(0);
    const [isCorrect, setIsCorrect] = useState(true);

    async function fetchData() {
        const res = await fetch(COUNTRY_URL);
        const data = await res.json();
        setCountryQuiz(data);
        selectRandomCountry(data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    function selectRandomCountry(countryQuiz) {
        const randomOpt = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt1 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt2 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt3 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        setCorrectAnswer(randomOpt);
        const randomOptions = [randomOpt, randomOpt1, randomOpt2, randomOpt3]
        randomOptions.sort(() => {return 0.5 - Math.random()})
        setRandomOption(randomOptions);
        setRandom(Math.floor(Math.random() * 5));
    }

    const disableAll = () => {
        let opt = document.getElementsByClassName("option");
        for (let i = 0; i < 4; i++) {
          opt[i].disabled = true;
        }
      };

    function handleClick(e) {
        const winCountry = correctAnswer.name;
        const userGuess = e.target.value;

        // Check if the right answer and the value of the element clicked is the same
        // Other ways do something else
        if (winCountry === userGuess) {
            setIsCorrect(true);
            e.target.style.background = "#048938";
            e.target.style.borderColor = "#048938";
            e.target.style.color = "#fff";

            // Get the new random
                setTimeout(() => {
                    selectRandomCountry(countryQuiz);
                    setGoodGuess(prevGuess => prevGuess + 1);
                }, 500);
        } else {
            setIsCorrect(false);
            e.target.style.background = "#EA8282";
            e.target.style.borderColor = "#EA8282";
            e.target.style.color = "#fff";
            disableAll();
        }

    }

    return (
        <div className="container">
            <main>
                <h1>Country Quiz</h1>
                <article className="article">
                    {countryQuiz 
                        ? (
                            <>
                                <Questions random={random} correctAnswer={correctAnswer} />
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
                        : <>
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
                    }
                </article>
            </main>
        </div>
    )
}

export default App;
