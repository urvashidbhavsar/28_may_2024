import React, { useState } from 'react'

const Example3_user = () => {
    const [input, setInput] = useState({
        uname: "",
        city: "",
    })

    const handleEvent = (e) => {
        // console.log(e.target.value)
        // setInput(e.target.value)
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <>
            Enter Any text : <input type="text" name="uname" value={input.uname} onChange={handleEvent} />
            <br />
            Enter City : <input type="text" name="city" value={input.city} onChange={handleEvent} />

            <p>You Entered : {input.uname}</p>
            <p>City : {input.city}</p>
        </>
    )
}

export default Example3_user
