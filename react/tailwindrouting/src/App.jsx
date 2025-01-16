import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './Component/Homepage'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route element="" path="/"></Route>
          <Route element={<Homepage />} path='Component/Homepage'></Route>
          <Route element={<About />} path='Component/About'></Route>
          <Route element={<Contact />} path='Component/Contact'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
