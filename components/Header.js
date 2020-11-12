import React from "react";
import undrawAdventure4hum from "../undraw_adventure_4hum1.svg";


function Header() {
    return (
        <header className="header">
            <h1>Country Quiz</h1>
            <img className="agventureImg" src={undrawAdventure4hum} alt="Undraw adventure for human" />
        </header>
    )
}

export default Header;