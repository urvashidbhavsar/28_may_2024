import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'

const Register = () => {
    const [uname, setUname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "allusers", user.uid), {
                    email: user.email,
                    uname: uname,
                });
            }
            alert("User Register Successfully");
            setUname("")
            setEmail("")
            setPassword("")
        } catch (e) {
            console.log(e);
            alert("email id already exist")
        }
    }
    return (
        <>
            <div className="container py-5">
                <form className='w-50 m-auto'>
                    <div className='row g-2'>
                        <div className='col-12'>
                            <input type="text" name="" placeholder='Fullname' value={uname} onChange={(e) => setUname(e.target.value)} className='form-control' />
                        </div>
                        <div className='col-12'>
                            <input type="text" name="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <div className='col-12'>
                            <input type="password" name="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                        </div>
                        <div className='col-12'>
                            <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
                        </div>
                        <div>
                            <p>Already have account ?
                                <Link to="/">Login</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
