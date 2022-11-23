import { number } from "prop-types"
import { useState } from "react"

export const CounterApp = ({ value }) => {
    const [count, setcount] = useState(value);
    
    const handleIncrease = () => setcount(count+1);
    const handleDecrease = () => setcount(count-1);
    const handleReset = () => setcount(value);

    return(
        <>
            <h1> CounterApp </h1>
            <h2>{ count }</h2>

            <button onClick={ handleIncrease }>+1</button>
            <button onClick={ handleDecrease }>-1</button>
            <button area-aria-label="btn-reset" onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: number,
}