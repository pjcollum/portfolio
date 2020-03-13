import React from 'react'

 function Button() {

    const [counter, setCounter] = React.useState(0);
    return (
        <button onClick={() => setCounter(counter+1)}>{counter}</button>
        
    )
}

export default Button