import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Registration from './Component/Registration'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Registration' element={<Registration />}>
          </Route>
        </Routes>
      </Router >
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <Home /> */}
    </>
  )
}

export default App
