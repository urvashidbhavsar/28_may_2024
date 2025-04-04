import React, { useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

// copy query from graphql server
const GET_USER = gql`
query GetUsers{
  getUser {
    id
    name
    salary
  }
}`;

const CREATE_USER = gql`
  mutation CreateUser($name:String!, $salary:Int!){
  createUser(name:$name, salary:$salary) {
      name
  }
}`;

const App = () => {
  const [newuser, setNewuser] = useState({
    name: "",
    salary: "",
  })

  const handlechange = (e) => {
    setNewuser({ ...newuser, [e.target.name]: e.target.value })
  }

  const { data: getuser, error: getusererr, loading: getuserload } = useQuery(GET_USER)

  const [createUser] = useMutation(CREATE_USER)

  if (getusererr)
    return <p>Error...</p>

  if (getuserload)
    return <p>Data not found...</p>

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newuser.name)
    console.log(newuser.salary)
    await createUser({
      variables: { name: newuser.name, salary: Number(newuser.salary) },
      refetchQueries: [{ query: GET_USER }]
    });
    setNewuser({ name: "", salary: "" });
  }

  return (
    <>
      <input type="text" name="name" placeholder='Name' value={newuser.name} onChange={handlechange} />
      <br /><br />
      <input type="number" name="salary" placeholder='Salary' value={newuser.salary} onChange={handlechange} />
      <br /><br />
      <button onClick={handleSubmit}>Add Data</button>

      <h2>Users </h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            getuser.getUser.map(items =>
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.salary}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
