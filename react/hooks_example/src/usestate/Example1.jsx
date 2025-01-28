import React, { useState } from 'react'

const Example1 = () => {
    // here count is initial state
    // setCount is function which is change state value
    // useState() store default value 
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>{count}</p>
        </>
    )
}

export default Example1
