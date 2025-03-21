import React, { useState } from 'react'
import { addUser } from '../Feature/userSlice'
import { useDispatch } from 'react-redux'
import Showemp from './Showemp'

const Employeedata = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        email: "",
        salary: "",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser(input))
        alert("Employee Added Successfully")
        setInput({
            name: "",
            email: "",
            salary: "",
        })
    }

    return (
        <>
            <div className="container">
                <h2 className="text-center border-2 border-bottom border-success pb-2 mb-4">Employee Entry</h2>
                <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleChange} required className="form-control" />
                        </div>
                        <div className="col-12">
                            <input type="email" name="email" placeholder="Email" value={input.email} onChange={handleChange} required className="form-control" />
                        </div>
                        <div className="col-12">
                            <input type="number" name="salary" placeholder="Salary" value={input.salary} onChange={handleChange} required className="form-control" />
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-outline-primary">Register</button>
                        </div>
                    </div>
                </form>
                <Showemp />
            </div>

        </>
    )
}

export default Employeedata
