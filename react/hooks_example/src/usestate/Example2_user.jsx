import React, { useState } from 'react'

const Example2_user = () => {
    const [input, setInput] = useState("")
    const [city, setCity] = useState("")

    const handleEvent = (e) => {
        setInput(e.target.value)
    }
    return (
        <>
            Enter Any text : <input type="text" name="user" value={input} onChange={handleEvent} />
            <br />
            Enter City : <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />

            <p>You Entered : {input}</p>
            <p>City : {city}</p>
        </>
    )
}

export default Example2_user
