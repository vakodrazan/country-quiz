import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);
    let [random, setRandom] = useState({});

    async function fetchData() {
        const res = await fetch(COUNTRY_URL);
        const data = await res.json();
        const countryMap = data.map(country => ({
            country: country
          }));
          setCountryQuiz(countryMap);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    function randomQuiz() {
        const randomOpt = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt1 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt2 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt3 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOptions = [randomOpt, randomOpt1, randomOpt2, randomOpt3];
        randomOptions.sort(() => { return 0.5 - Math.random() });
        console.log(randomOptions)
    }
    useEffect(() => {
        randomQuiz();
    }, [randomQuiz])

    return (
        <main>
            <h1>Country Quiz</h1>
        </main>
    )
}

export default App;