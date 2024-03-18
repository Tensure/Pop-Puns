import React from "react"

export default function Joke() {
    function handleClick(){
        console.log("click")
    }
    return (
        <main>
            <form className ="form">
                <button
                    className="form--button"
                    onClick={handleClick}
                >
                    Press for Pop's Puns</button>
            </form>
        </main>
    )
}