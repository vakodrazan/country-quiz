import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);
    let [randomCountry, setRandomCountry] = useState({
        correctAnswer: {},
        randomOption: [],
        isAnswer: "",
        goodGuess: 0,
        bgColor: {backgroundColor: '#fff'}

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
            goodGuess: 0,
            bgColor: {backgroundColor: '#fff'}
        });
    }

    function handleClick(e) {
        const winCountry = randomCountry.correctAnswer.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            setRandomCountry((prev) => {
                return {
                    ...prev,
                    goodGuess: randomCountry.goodGuess + 1,
                    bgColor: {backgroundColor: '#048938'}
                }
            });
            console.log("You are right");
        } else {
            setRandomCountry((prev) => {return {
                ...prev,
                bgColor: {backgroundColor: '#FF8A65'}
            }})
            console.log("Wrong guess");
        }
    }
    return (
        <main>
            <h1>Country Quiz</h1>
            <div style={randomCountry.bgColor}>
                <p>Which country's capital city is <strong>{randomCountry.correctAnswer.capital}</strong>?</p>

                <div>
                    <p><strong>Score: </strong> {randomCountry.goodGuess}</p>
                    {randomCountry.randomOption.map(answer => (
                        <button key={answer.numericCode} value={answer.name} onClick={handleClick} >{answer.name}</button>
                    ))}
                </div>
                {/* <button className="rnd mui-btn mui-btn--raised" onClick={() => setRandomCountry(countryQuiz)}>Random</button> */}
            </div>
        </main>
    )
}

export default App;