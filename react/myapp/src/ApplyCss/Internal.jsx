import React from 'react'

const Internal = () => {
    // create object for apply internal css
    let myclass = {
        padding: "20px",
        color: "blue",
        border: "1px solid black",
        borderRadius: "20px"
    }
    return (
        <>
            <h1 style={myclass}>Hello world</h1>
        </>
    )
}

export default Internal
