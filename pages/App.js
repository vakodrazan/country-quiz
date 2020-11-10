import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);
    let [random, setRandom] = useState([]);

    async function fetchData() {
        const res = await fetch(COUNTRY_URL);
        const data = await res.json();
        setCountryQuiz(data);
        selectRandomCountry(data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    function selectRandomCountry(quiz) {
        console.log(quiz);
        const randomOpt = quiz[Math.floor(Math.random() * countryQuiz.length)];
        setRandom(randomOpt);
    }

    return (
        <main>
            <h1>Country Quiz</h1>
            <div>{random.name}</div>
        </main>
    )
}

export default App;