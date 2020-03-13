import React from 'react'


export default function Contact(props) {
    return (
        <div>
            <h1>This is the contact page</h1>
            
            <div className="pic">
           
            <a href="https://twitter.com/" target='blank'><img src="./images/twitter.png" alt="Twitter" /></a>
            <a href="https://facebook.com" target='blank'><img src="./images/fb.png" alt="FaceBook" /></a>
            <a href="https://linkedin.com" target='blank'><img src="./images/linkedin.png" alt="FaceBook" /></a>
            <a href="https://github.com/pjcollum" target='blank'><img src="./images/git.svg" alt="GitHub" /></a>
            </div>  
            

            

            {/* <img class="twitter" onclick="window.location.href = 'https://www.twitter.com';" src="twitter.png" alt="twitter"></img>
            <img class="fb" onclick="window.location.href = 'https://www.facebook.com';" src="fb.png" alt="fb"></img> */}
            {/* <img class="dog" src={"./dog.jpeg"} alt="dog"></img> */}
        </div>
    )
}
