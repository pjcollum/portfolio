import React from 'react'

export default function Home(props) {
    return (
        <>
        <div>
            <h1>Welcome to my website</h1>
            <h2>Built using React</h2>
            <hr/>
            <button onClick={props.addToBasket} className="pointsButton">Add for Points</button>
           
            <ul>
                <li>Apprentice Software Developer, Health Education England</li>
                <li>Master Develop Course, Code Nation</li>
            </ul>
        </div>
        <div className="pic">
           
            <a href="https://twitter.com/" target='blank'><img src="./images/twitter.png" alt="Twitter" /></a>
            <a href="https://facebook.com" target='blank'><img src="./images/fb.png" alt="FaceBook" /></a>
            <a href="https://linkedin.com" target='blank'><img src="./images/linkedin.png" alt="FaceBook" /></a>
            <a href="https://github.com/pjcollum" target='blank'><img src="./images/git.svg" alt="GitHub" /></a>
            </div>  
        </>
    )
}
