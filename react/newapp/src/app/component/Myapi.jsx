"use client"
import React, { useEffect, useState } from 'react'

const Myapi = () => {
    const [setdata, getSetdata] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            getSetdata(data);
        }
        fetchdata();
    })

    let myimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    return (
        <>
            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            setdata.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td><img src={item.image} style={myimg} /></td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Myapi
