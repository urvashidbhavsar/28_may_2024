import React, { useEffect, useState } from 'react'
import '../App.css'
import AddData from './AddData';

const Showdata = () => {
    const [data, setData] = useState([]);

    const fetchdata = () => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setData(data))
    }

    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
            <AddData fetchdata={fetchdata} />
            <div className="container">
                <table border={1} className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Date of Join</th>
                            <th>Salary</th>
                            <th>City</th>
                            <th>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.ename}</td>
                                    <td>{items.designation}</td>
                                    <td>{items.doj}</td>
                                    <td>{items.salary}</td>
                                    <td>{items.city}</td>
                                    <td><img src={items.profile} alt="" /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showdata
