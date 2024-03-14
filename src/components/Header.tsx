import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/dad-face.png" alt="Dad glasses and mustache"
                className="header-image"
            />
            <h2 className="header-title">Pop Puns</h2>
            <h4 className="app-function">Dad Joke Generator</h4>
        </header>
    )
}