import React, { useContext, useEffect, useRef, useState } from "react";
import AnswerOptions from "../components/AnswerOptions";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Results from "../components/Results";
import { Context } from "./Context";
import scaleFunc from "./scale";

function App() {
    const { countryQuiz, loading } = useContext(Context);
    const scaleContainer = useRef(null)

    const [scale, setScale] = useState(1)
    useEffect(() => {
        setScale(() => scaleFunc(scale, scaleContainer));
    })
    // console.log(scale);
    return (
        <main>
            <div className="container" ref={scaleContainer}>
                <Header />
                <article className="article">
                    {loading && <h2>Loading...</h2>}
                    {countryQuiz 
                        ? (
                            <div className="wrapper">
                                <img className="adventureImg" src="undraw_adventure_4hum1.svg" alt="Undraw adventure for human" />
                                <Questions />
                                <AnswerOptions />
                            </div>
                        ) 
                        : <Results /> 
                    }
                </article>
            </div>
        </main>
    )
}

export default App;
