import React from "react";
import undrawAdventure4hum from "../undraw_adventure_4hum1.svg";


function Header() {
    console.log(undrawAdventure4hum);
    return (
        <header>
            <h1>Country Quiz</h1>
            <img src={undrawAdventure4hum} />
        </header>
    )
}

export default Header;