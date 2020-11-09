import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);

    useEffect(() => {
        fetch(COUNTRY_URL)
            .then(data => data.json())
            .then(countryQuiz => setCountryQuiz({countryQuiz}))
            .then(randomCountry)
    }, []);
    
    console.log(countryQuiz);

    function randomCountry() {
        const random = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const random1 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const random2 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const random3 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const random4 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        console.log([random]);
    }

    return <h1>Country Quiz</h1>
}

export default App;