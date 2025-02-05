import React, { useReducer } from 'react'

const initval = 0
const mathtask = (state, action) => {
    switch (action) {
        case "add":
            return state + 1
        case "subtract":
            return state - 1;
        case "multiply":
            return state * 2;
        case "divide":
            return state / 2;
        case "reset":
            return 0
        default:
            throw Error("invalid")
    }
}
const Arithmetic = () => {
    const [number, setNumber] = useReducer(mathtask, initval)
    return (
        <>
            <button onClick={() => setNumber("add")}>Add</button>
            <button onClick={() => setNumber("subtract")}>Subtract</button>
            <button onClick={() => setNumber("multiply")}>Multiply</button>
            <button onClick={() => setNumber("divide")}>Division</button>
            <button onClick={() => setNumber("reset")}>Reset</button>

            <p>{number}</p>
        </>
    )
}

export default Arithmetic
