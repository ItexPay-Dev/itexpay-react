import * as React from 'react'

const Button = () => {
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>This is a button with a counter</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default Button;