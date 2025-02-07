import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Home from './Component/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/Home" element={<Loginservice />} > */}
          <Route path="/Home" element={<Home />} />
          {/* </Route > */}
        </Routes>
      </Router >
    </>
  )
}

export default App
