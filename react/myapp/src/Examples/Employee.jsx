import React from 'react'

const Employee = () => {
    let empdata = [
        {
            id: 1,
            ename: "Dipak",
            salary: 25000
        },
        {
            id: 2,
            ename: "Manisha",
            salary: 20000
        },
        {
            id: 3,
            ename: "Hetal",
            salary: 18000
        },
        {
            id: 4,
            ename: "Chirag",
            salary: 30000
        }
    ]
    let result = empdata.map((items, key) =>
        <tr key={key}>
            <td>{items.id}</td>
            <td>{items.ename}</td>
            <td>{items.salary}</td>
        </tr>
    )
    // after filter
    let fil_data = empdata.filter(items => items.salary < 25000)
    // console.log(fil_data);
    let filterData = fil_data.map((items, key) =>
        <tr key={key}>
            <td>{items.id}</td>
            <td>{items.ename}</td>
            <td>{items.salary}</td>
        </tr>)

    return (
        <>
            <table border={1} style={{ marginLeft: 30 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Emp name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>

            <h5>After Filter</h5>
            <table border={1} style={{ marginLeft: 30 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Emp name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData}
                </tbody>
            </table>
        </>
    )
}

export default Employee
