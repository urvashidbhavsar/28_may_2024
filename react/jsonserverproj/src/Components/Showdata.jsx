import React, { useEffect, useState } from 'react'
import '../App.css'
import AddData from './AddData';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditData from './EditData';

const Showdata = () => {
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState("")

    const fetchdata = () => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setData(data))
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const deleteData = (id) => {
        if (confirm("Are you sure want to delete this data")) {
            fetch(`http://localhost:3000/employee/${id}`, {
                method: "DELETE",
            })
                .then(res => fetchdata())
        }
    }

    const editData = (items) => {
        setUpdateData(items)
    }

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
                            <th colSpan={2}>Action</th>
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
                                    <td>
                                        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#updatedata" onClick={() => editData(items)}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteData(items.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <EditData edit={updatedata} editdata={setUpdateData} fetchdata={fetchdata} />
        </>
    )
}

export default Showdata
