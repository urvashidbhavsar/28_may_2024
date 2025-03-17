import React, { useState } from 'react'
import { addTodo } from '../Feature/todoSlice'
import { useDispatch } from 'react-redux';

const Addtodo = () => {
    const [input, setInput] = useState("");
    const dispath = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispath(addTodo(input))
        alert("Data added successfully");
        setInput("")
    }

    return (
        <div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-8">
                        <input type="text" placeholder="Enter todos...." className='form-control' value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={handleSubmit}>Add Todos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtodo
