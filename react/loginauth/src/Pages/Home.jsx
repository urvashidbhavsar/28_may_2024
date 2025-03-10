import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [userdetails, getUser] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            const user = auth.currentUser;
            if (user) {
                const userdata = await getDoc(doc(db, "allusers", user.uid))
                if (userdata.exists()) {
                    getUser(userdata.data())
                    console.log(userdata.data());
                }
            }
        }
        fetchdata()
    }, [])

    const logout = async () => {
        try {
            await auth.signOut()
            navigate("/")
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className='m-auto mt-5 p-4 shadow w-50 text-center'>
                <div>
                    {
                        userdetails ?
                            <h1>Welcome {userdetails.uname}</h1>
                            :
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }
                </div>
                <div className='py-3'>
                    <button className='btn btn-danger' onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Home
