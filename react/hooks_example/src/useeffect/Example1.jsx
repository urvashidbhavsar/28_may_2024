import React, { useEffect, useState } from 'react'

const Example1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount((count) => count + 1)
        }, 1000);
    }, [])

    return (
        <>
            <p>{count}</p>
        </>
    )
}

export default Example1
