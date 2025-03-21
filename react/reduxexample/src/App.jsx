import React from 'react'
import Addtodo from './Pages/Addtodo'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Employeedata from './Pages/Employeedata'
// import { Provider } from 'react-redux'
// import { store } from './store/store'

const App = () => {
  return (
    <>
      <Router>
        <ul className='list-unstyled d-flex gap-3 justify-content-center py-4'>
          <li><Link to="/addtodo">Add Todo</Link></li>
          <li><Link to="/employee">Employee</Link></li>
        </ul>

        <Routes>
          <Route path="/addtodo" element={<Addtodo />} />
          <Route path='/employee' element={<Employeedata />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
