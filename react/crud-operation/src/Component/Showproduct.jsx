import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import '../App.css'

const Showproduct = () => {
    const [getdata, setGetdata] = useState([])

    useEffect(() => {
        let get_data = JSON.parse(localStorage.getItem("productdata"))
        setGetdata(get_data)
        console.log(get_data)
    }, [])

    return (
        <>
            <Navigation />
            <div className="container py-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.category}</td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>
                                        <div>
                                            <s>₹{items.oldprice}</s>
                                        </div>
                                        <div>₹{items.newprice}</div>
                                    </td>
                                    <td>{items.rate}%</td>
                                    <td>
                                        <img src={items.image} alt="" className='imgsize' />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showproduct
