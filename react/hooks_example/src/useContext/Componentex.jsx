import React, { createContext, useContext, useState } from 'react'

const Createcontext = createContext()
const Componentex = () => {
    const [user, setUser] = useState("Hello User")
    return (
        <>
            <Createcontext.Provider value={user}>
                <h1>{user}</h1>
                <Component2 />
            </Createcontext.Provider>
        </>
    )
}
const Component2 = () => {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    )
}
const Component3 = () => {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    )
}
const Component4 = () => {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    )
}
const Component5 = () => {
    const user = useContext(Createcontext)
    return (
        <>
            <h1>Component 5</h1>
            <h4>{user}</h4>
        </>
    )
}

export default Componentex
