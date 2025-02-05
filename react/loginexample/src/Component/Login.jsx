import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container">
                <form className='w-50 mx-auto shadow p-3 mt-5'>
                    <h2>User Login</h2>
                    <div className="row g-2">
                        <div className="col-12">
                            <input type="email" name="" id="" placeholder='Email' required className='form-control' />
                        </div>
                        <div className="col-12">
                            <input type="password" name="" id=""
                                placeholder='Password' required className='form-control' />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                        <div className="col-12">
                            <p>
                                New User?
                                <Link to="/Registration">Register here</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
