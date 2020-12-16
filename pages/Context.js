import React, { createContext, useEffect, useRef, useState } from "react";

// Do all the logic in this file

const Context = createContext();

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all";
function ContextProvider({ children }) {
    // All the variables
    const [countryQuiz, setCountryQuiz] = useState([]); // full list of country info
    let [randomOption, setRandomOption] = useState([]); // all the list options
    const [correctAnswer, setCorrectAnswer] = useState({}); // the right answer
    const [random, setRandom] = useState(0); // how many times has it rendered
    const [goodGuess, setGoodGuess] = useState(0); // score
    const [isCorrect, setIsCorrect] = useState(true); // this is for the choosen answer
    const [visibility, setVisibility] = useState({display: "none"});// for the next button
    const [loading, setLoading] = useState(true);
    const buttonRef = useRef(null);

    // Fetch the data from the API
    async function fetchData() {
        const res = await fetch(COUNTRY_URL);
        const data = await res.json();
        setCountryQuiz(data);
        selectRandomCountry(data);
        setLoading(false)
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
        setRandom(Math.floor(Math.random() * countryQuiz.length));
    }

    // Handle the option button
    function handleClick(e) {
        const winCountry = correctAnswer.name;
        const userGuess = e.target.value;
        // Check if the right answer and the value of the element clicked is the same
        // Other ways do something else
        if (winCountry === userGuess) {
            setIsCorrect(true);
            e.currentTarget.classList.add("correctBtn")
            setVisibility({display: "unset"})
            setGoodGuess(prevGuess => prevGuess + 1);
        } else {
            setIsCorrect(false);
            e.currentTarget.classList.add("wrongBtn");
            buttonRef.current.classList.add("correctBtn")
            setVisibility({display: "unset"})
        }
    }

    // Handle the next button
    function handleClickNext() {
        if (isCorrect) {
            // If it's true carry on with the quiz
            selectRandomCountry(countryQuiz)
        } else {
            // when the choosen answer is wrong, reset the list and show another recommendation
            setCountryQuiz(null)
        }
        // wait for sometime after clicking the button and hide it 
        setTimeout(() => {
            setVisibility({display: "none"})
        }, 200);
    }

    return (
    <Context.Provider 
        value={{ 
            countryQuiz,
            random,
            correctAnswer,
            goodGuess,
            randomOption,
            visibility,
            loading,
            buttonRef,
            setGoodGuess,
            setIsCorrect,
            handleClick,
            fetchData,
            handleClickNext 
        }}
    >
        {children}
    </Context.Provider>
    )
}

export { ContextProvider, Context};