import React from 'react'

const Message = () => {
    return <div>Hello User to learn JSX</div>
}

const Applyex = () => {
    // create variable
    const say = "Hi", name = "Rahul"

    return (
        <div>
            {/* call variables */}
            {say}, {name} Welcome to tops
            <Message />
        </div>
    )
}

export default Applyex
