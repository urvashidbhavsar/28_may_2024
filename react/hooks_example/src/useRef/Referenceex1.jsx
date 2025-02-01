import React, { useRef } from 'react'

const Referenceex1 = () => {
    const setref = useRef(null);

    const handleEvent = () => {
        setref.current.focus()
    }
    return (
        <>
            <button onClick={handleEvent}>click</button>
            <input type="text" name="" id="" ref={setref} />
        </>
    )
}

export default Referenceex1
