import { useEffect, useState } from "react";

// Do all the logic in this file

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";
function useCountryQuiz() {
    // All the variables
    const [countryQuiz, setCountryQuiz] = useState([]); // full list of country info
    let [randomOption, setRandomOption] = useState([]); // all the list options
    const [correctAnswer, setCorrectAnswer] = useState({}); // the right answer
    const [random, setRandom] = useState(0); // how many times has it rendered
    const [goodGuess, setGoodGuess] = useState(0); // score
    const [isCorrect, setIsCorrect] = useState(true); // this is for the choosen answer
    const [visibility, setVisibility] = useState({display: "none"});// for the next button

    // Fetch the data from the API
    async function fetchData() {
        const res = await fetch(COUNTRY_URL);
        const data = await res.json();
        setCountryQuiz(data);
        selectRandomCountry(data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    // Get the list randomly
    function selectRandomCountry(countryQuiz) {
        const randomOpt = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt1 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt2 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        const randomOpt3 = countryQuiz[Math.floor(Math.random() * countryQuiz.length)];
        // this is where we get the right answer and the question
        setCorrectAnswer(randomOpt);
        // Mixed all the item so that the right answer won't stay in the same place
        const randomOptions = [randomOpt, randomOpt1, randomOpt2, randomOpt3]
        randomOptions.sort(() => {return 0.5 - Math.random()})
        // All the option random list
        setRandomOption(randomOptions);
        setRandom(Math.floor(Math.random() * 5));
    }

    // Disabled the button after choosing the answer
    const disableAll = () => {
        let opt = document.getElementsByClassName("option");
        for (let i = 0; i < 4; i++) {
          opt[i].disabled = true;
        }
      };

    // Handle the option button
    function handleClick(e) {
        // Change the color of the right answer when the choice is wrong
        const buttons = document.getElementsByClassName("option");
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === correctAnswer.name) {
                buttons[i].classList.add("correctBtn")
            }
        }

        const winCountry = correctAnswer.name;
        const userGuess = e.target.value;
        // Check if the right answer and the value of the element clicked is the same
        // Other ways do something else
        if (winCountry === userGuess) {
            setIsCorrect(true);
            e.target.classList.add("correctBtn")
            setVisibility({display: "block"})
            setGoodGuess(prevGuess => prevGuess + 1);
        } else {
            setIsCorrect(false);
            e.target.classList.add("wrongBtn");
            disableAll();
            setVisibility({display: "block"})
        }
    }

    // Handle the next button
    function handleClickNext() {
        // when the choosen answer is wrong, reset the list and show another recommendation
        if (isCorrect === false) {
            setCountryQuiz(null)
        } else {
            // If it's true carry on with the quiz
            selectRandomCountry(countryQuiz)
        }
        // wait for sometime after clicking the button and hide it 
        setTimeout(() => {
            setVisibility({display: "none"})
        }, 200);
    }

    return [
        countryQuiz,
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
    ]
}

export default useCountryQuiz;