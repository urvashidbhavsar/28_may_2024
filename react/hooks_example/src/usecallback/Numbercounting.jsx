import React, { useCallback, useState } from 'react'

const Numbercounting = () => {
    const [count, setCount] = useState(0)

    const result = (useCallback(() => {
        setCount(count + 1)
    }, [count]))
    return (
        <>
            <button onClick={result}>Changes</button>
            <p>Count : {count}</p>
            {/* <p>Result :{result}</p> */}
        </>
    )
}

export default Numbercounting
