import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <h2>PS4 sale: 50%</h2>
            <button onClick={props.addToBasket} className="pointsButton">Add for Points</button>
        </div>
    )
}
