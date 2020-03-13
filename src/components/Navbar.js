import React from 'react'
import{Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav>
            <h1>Pete Collum</h1>
            <ul>
                <li><Link to="/">Home  </Link> </li>
                <li><Link to="/about">About  </Link> </li>
                <li><Link to="/contact">Contact  </Link> </li>
                <li>Points: {props.myBasket}</li>
            </ul>
        </nav>
    )
}
