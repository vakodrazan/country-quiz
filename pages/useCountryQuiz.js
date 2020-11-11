import { useEffect, useState } from "react";

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";
function useCountryQuiz() {
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

    return [
        countryQuiz,
        random,
        correctAnswer,
        goodGuess,
        randomOption,
        isCorrect,
        setCountryQuiz,
        setIsCorrect,
        handleClick,
        fetchData
    ]
}

export default useCountryQuiz;