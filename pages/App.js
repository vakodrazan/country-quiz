import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);
    let [randomOption, setRandomOption] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState({});
    const [isAnswer, setIsAnswer] = useState("");
    const [goodGuess, setGoodGuess] = useState(0);
    const [bgColor, setBgColor] = useState({backgroundColor: '#fff'});

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
    }

    function handleClick(e) {
        const winCountry = correctAnswer.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            setGoodGuess(prevGuess => prevGuess + 1);
            setBgColor({backgroundColor: '#048938'})
            setTimeout(() => {
                setBgColor({backgroundColor: '#fff'})
            }, 2000);
        } else {
            setBgColor({backgroundColor: '#FF8A65'})
        }
    }
    return (
        <main>
            <h1>Country Quiz</h1>
            <div style={bgColor}>
                <p><strong>{correctAnswer.capital}</strong> is a capital city of</p>
                <div>
                    <p><strong>Score: </strong> {goodGuess}</p>
                    {randomOption.map(answer => (
                        <button key={answer.numericCode} value={answer.name} onClick={handleClick} >{answer.name}</button>
                    ))}
                </div>
                <button onClick={() => selectRandomCountry(countryQuiz)}>Random</button>
            </div>
        </main>
    )
}

export default App;