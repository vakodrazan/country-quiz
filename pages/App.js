import React, { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";

function App() {
    const [countryQuiz, setCountryQuiz] = useState([]);

    async function fetchData() {
        try {
            const res = await fetch(COUNTRY_URL);
            const data = await res.json();
            setCountryQuiz(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    console.log(countryQuiz);

    return <h1>Country Quiz</h1>
}

export default App;