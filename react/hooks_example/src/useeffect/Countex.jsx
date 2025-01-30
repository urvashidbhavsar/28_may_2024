import React, { useEffect, useState } from 'react'

const Countex = () => {
    const [count, setCount] = useState(0)

    // also effected while count is changed on click
    useEffect(() => {
        document.title = count
    }, [count])
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>{count}</p>
        </>
    )
}

export default Countex
