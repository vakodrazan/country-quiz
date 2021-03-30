import React, { useContext } from "react";
import AnswerOptions from "../components/AnswerOptions";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Results from "../components/Results";
import { Context } from "./Context";

function App() {
    const { countryQuiz, loading } = useContext(Context)
    return (
        <main>
            <div className="container">
                <Header />
                <div className="content-wrapper">
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
                </div>
            </div>
        </main>
    )
}

export default App;
