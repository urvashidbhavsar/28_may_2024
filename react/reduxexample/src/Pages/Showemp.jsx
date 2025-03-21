import React from 'react'
import { useSelector } from 'react-redux'

const Showemp = () => {
    const user = useSelector((state) => state.users.users)
    console.log(user)
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Emp name</th>
                        <th>Emp email</th>
                        <th>Emp salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Showemp
