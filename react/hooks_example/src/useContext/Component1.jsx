import React, { useState } from 'react'

const Component1 = () => {
    const [user, setUser] = useState("Hello User")
    return (
        <>
            <h1>{user}</h1>
            <Component2 user={user} />
        </>
    )
}
const Component2 = ({ user }) => {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </>
    )
}
const Component3 = ({ user }) => {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 user={user} />
        </>
    )
}
const Component4 = ({ user }) => {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 user={user} />
        </>
    )
}
const Component5 = ({ user }) => {
    return (
        <>
            <h1>Component 5</h1>
            <h4>{user}</h4>
        </>
    )
}

export default Component1
