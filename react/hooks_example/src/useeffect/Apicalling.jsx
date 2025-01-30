import React, { useEffect, useState } from 'react'

const Apicalling = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchapi = async () => {
            const result = await fetch("https://fakestoreapiserver.reactbd.com/users")
            const data = await result.json()
            setUsers(data)
        }
        fetchapi()
    })
    return (
        <>
            <table border={1} className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(items =>
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{items.email}</td>
                                <td>{items.address.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Apicalling
