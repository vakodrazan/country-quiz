import React from "react";

function Questions({random, correctAnswer}) {
    return (
        <div className="question">
            {random % 3 === 0 
                ? 
                <div> 
                    <img className="flag-img" src={correctAnswer.flag} alt={`This is ${correctAnswer.name} flag`} /> 
                    <p>Which country does this flag belong to?</p>
                </div>
                : <p><strong>{correctAnswer.capital}</strong> is the capital city of</p>
            }
        </div>
    )
}

export default Questions;