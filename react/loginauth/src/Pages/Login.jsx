import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/Home")
        } catch (e) {
            console.log(e)
            alert("Invalid Values!!!!")
        }
    }

    return (
        <>
            <div className="container py-5">
                <form className='w-50 m-auto' onSubmit={handleLogin}>
                    <div className='row g-2'>
                        <div className='col-12'>
                            <input type="text" name="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <div className='col-12'>
                            <input type="password" name="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                        <div>
                            <p>Already have account ?
                                <Link to="/Register">Register</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
