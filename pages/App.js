import React, { useContext } from "react";
import AnswerOptions from "../components/AnswerOptions";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Results from "../components/Results";
import { Context } from "./Context";

function App() {
    const { countryQuiz, loading } = useContext(Context)
    return (
        <div className="container">
            <main>
                <Header />
                <article className="article">
                    {loading && <h2>Loading...</h2>}
                    {countryQuiz 
                        ? (
                            <>
                                <Questions />
                                <AnswerOptions />
                            </>
                        ) 
                        : <Results /> 
                    }
                </article>
            </main>
        </div>
    )
}

export default App;
