import React, { useMemo, useState } from 'react'

const Numbercount = () => {
    let [count, setCount] = useState(0)
    let [dependcount, setDependcount] = useState(0)

    const result = useMemo(() => {
        return count + 1
    }, [count])
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Set Count
            </button>
            <button onClick={() => setDependcount(dependcount + 1)}>
                Depend Count
            </button>
            <p>Result : {result}</p>
            <p>Count : {count}</p>
            <p>Depend : {dependcount}</p>
        </>
    )
}

export default Numbercount
