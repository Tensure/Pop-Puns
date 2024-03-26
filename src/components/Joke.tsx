import React, { useState } from "react"

export default function Joke() {
    const [joke, setJoke] = useState(null);

    function getJoke(){
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.joke);
            setJoke(data.joke);
        })
    }

    return (
        <main>
            <p className="bubble">{joke}</p>
            <div className ="form">
                <button
                    className="form--button"
                    onClick={getJoke}
                >
                    Press for Pop's Puns</button>
            </div>
        </main>
    )
}