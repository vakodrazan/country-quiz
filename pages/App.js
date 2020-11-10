import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);
    // let [correctAnswer, setCorrectAnswer] = useState([]);
    let [randomCountry, setRandomCountry] = useState({
        correctAnswer: {},
        randomOption: [],
        isAnswer: "",
        goodGuess: 0,
        backgroundColor: "white",

    });

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
        // setCorrectAnswer(randomOpt);
        const randomOptions = [randomOpt, randomOpt1, randomOpt2, randomOpt3]
        randomOptions.sort(() => {return 0.5 - Math.random()})
        setRandomCountry({
            correctAnswer: randomOpt,
            randomOption: randomOptions,
            isAnswer: "",
        });
    }
    console.log(randomCountry);

    function handleClick(e) {
        console.log(e.target.value);
    }
    return (
        <main>
            <h1>Country Quiz</h1>
            <div>
                <p>Which country's capital city is <strong>{randomCountry.correctAnswer.capital}</strong>?</p>

                <div>
                    {randomCountry.randomOption.map(answer => (
                        <button key={answer.numericCode} value={answer.name} onClick={handleClick} >{answer.name}</button>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default App;