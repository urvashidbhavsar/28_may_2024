import React, { useEffect, useState } from 'react'
import '../App.css'
import AddData from './AddData';
import { faPen, faTrash, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditData from './EditData';
import List from './List';

const Showdata = () => {
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState("");
    const { des, city } = List();

    const [filteredData, setFilteredData] = useState([]);
    const [selop, setSelop] = useState("");
    const [desig, setDesig] = useState("");
    const [cities, setCity] = useState("");
    const [dateOfJoin, setDateOfJoin] = useState("");
    const [salary, setSalary] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const fetchdata = () => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            });
    };

    useEffect(() => {
        fetchdata();
    }, []);

    useEffect(() => {
        let filtered = data;
        if (selop === "desig" && desig) {
            filtered = filtered.filter(item => item.designation === desig);
        }
        if (selop === "cities" && cities) {
            filtered = filtered.filter(item => item.city === cities);
        }
        if (selop === "dateOfJoin" && dateOfJoin) {
            filtered = filtered.filter(item => item.doj === dateOfJoin);
        }
        if (selop === "salary" && salary) {
            filtered = filtered.filter(item => item.salary.toString() === salary);
        }
        setFilteredData(filtered);
    }, [selop, desig, cities, dateOfJoin, salary, data]);

    const deleteData = (id) => {
        if (confirm("Are you sure want to delete this data")) {
            fetch(`http://localhost:3000/employee/${id}`, {
                method: "DELETE",
            }).then(() => fetchdata());
        }
    };

    const editData = (items) => {
        setUpdateData(items);
    };

    const sortdata = () => {
        let sortedData = [...filteredData];
        sortedData.sort((a, b) => {
            return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
        });

        setFilteredData(sortedData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <>
            <AddData fetchdata={fetchdata} />

            <div className="container">
                <h4 className='border-bottom border-2 border-danger'>Search Data</h4>
                <div className='row pb-3'>
                    <div className="col-12">
                        <div className='form-check-inline'>
                            <input type="radio" name="sel" id="desig" className='form-check-input' value="desig"
                                onChange={(e) => setSelop(e.target.value)} checked={selop === "desig"} />
                            <label htmlFor="desig" className='ps-2'>Designation</label>
                        </div>
                        <div className='form-check-inline'>
                            <input type="radio" name="sel" id="cities" className='form-check-input' value="cities"
                                onChange={(e) => setSelop(e.target.value)} checked={selop === "cities"} />
                            <label htmlFor="cities" className='ps-2'>City</label>
                        </div>
                        <div className='form-check-inline'>
                            <input type="radio" name="sel" id="dateOfJoin" className='form-check-input' value="dateOfJoin"
                                onChange={(e) => setSelop(e.target.value)} checked={selop === "dateOfJoin"} />
                            <label htmlFor="dateOfJoin" className='ps-2'>Date of Join</label>
                        </div>
                        <div className='form-check-inline'>
                            <input type="radio" name="sel" id="salary" className='form-check-input' value="salary"
                                onChange={(e) => setSelop(e.target.value)} checked={selop === "salary"} />
                            <label htmlFor="salary" className='ps-2'>Salary</label>
                        </div>
                    </div>
                    <div className='col-12 mt-2'>
                        {selop === "desig" && (
                            <select value={desig} onChange={(e) => setDesig(e.target.value)} className='form-select'>
                                <option value="">--- Designation ---</option>
                                {des.map(items => <option key={items} value={items}>{items}</option>)}
                            </select>
                        )}
                        {selop === "cities" && (
                            <select value={cities} onChange={(e) => setCity(e.target.value)} className='form-select'>
                                <option value="">--- City ---</option>
                                {city.map(items => <option key={items} value={items}>{items}</option>)}
                            </select>
                        )}
                        {selop === "dateOfJoin" && (
                            <input type="date" value={dateOfJoin} onChange={(e) => setDateOfJoin(e.target.value)} className='form-control' />
                        )}
                        {selop === "salary" && (
                            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter salary" className='form-control' />
                        )}
                    </div>
                </div>

                <div className='mt-3'>
                    <table border={1} className='table'>
                        <thead>
                            <tr>
                                <th>
                                    <label className='pe-2'>ID</label>
                                    <button className='btn btn-dark' onClick={() => sortdata(data.id)}>
                                        <FontAwesomeIcon icon={faArrowsUpDown} />
                                    </button>
                                </th>
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
                                filteredData.length > 0 ?
                                    filteredData.map(items => (
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
                                    )) :
                                    <tr>
                                        <td colSpan={8}>
                                            There are no any data found as per select option
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <EditData edit={updatedata} editdata={setUpdateData} fetchdata={fetchdata} />
        </>
    );
};

export default Showdata;
