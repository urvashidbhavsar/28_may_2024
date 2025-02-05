import React, { useState } from 'react'

const Mathtask = () => {
    const [input, setInput] = useState({
        num1: "",
        num2: ""
    })
    let [result, setResult] = useState(null)
    const handleEvent = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    // console.log(input.num1);
    // console.log(input.num2);

    const addition = () => {
        let n1 = parseInt(input.num1)
        let n2 = parseInt(input.num2)
        result = n1 + n2
        setResult(result)
    }

    return (
        <>
            <div className='w-50 p-3 m-5 border-2 border border-dark'>
                <div className="row g-2">
                    <div className="col-12">
                        <input type="number" name="num1" id="" placeholder='1st number' value={input.num1} onChange={handleEvent} />
                    </div>
                    <div className="col-12">
                        <input type="number" name="num2" id="" placeholder='2nd number' value={input.num2} onChange={handleEvent} />
                    </div>
                    <div className="col-12">
                        <button className='btn btn-primary' onClick={addition}>Add</button>
                    </div>
                    <div className="col-12">
                        <p>Answer : {result}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mathtask
