import React from 'react'

//import Dog from "./images/dog.jpeg";
// import Twitter from './images/twitter.png';
// import Fb from './images/fb.png';

export default function Contact(props) {
    return (
        <div>
            <h1>This is the contact page</h1>
            
            {/* <img src={Dog} alt="" /> */}

            {/* <img src={Dog} alt="Dog" />  */}
            <div className="pic">
                <img src="./images/dog.jpeg" alt="Dog" />
                <img src="./images/twitter.png" alt="Twitter" />
                <img src="./images/fb.png" alt="FaceBook" />
            </div>  
            {/* <img src={"./images/twitter.png"} alt="Twitter" >
            <img src={"./images/twitter.png"} alt="Facebook" > */}

            {/* <img class="twitter" onclick="window.location.href = 'https://www.twitter.com';" src="twitter.png" alt="twitter"></img>
            <img class="fb" onclick="window.location.href = 'https://www.facebook.com';" src="fb.png" alt="fb"></img> */}
            {/* <img class="dog" src={"./dog.jpeg"} alt="dog"></img> */}
        </div>
    )
}
