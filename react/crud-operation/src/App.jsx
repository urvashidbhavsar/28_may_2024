import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Home from './Component/Home';
import Loginprotection from './Service/Loginprotection';
import Productpage from './Component/Productpage';
import Showproduct from './Component/Showproduct';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/Home/*" element={<Loginprotection />} >
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Product" element={<Productpage />} />
            <Route path="Showproduct" element={<Showproduct />} />
          </Route >
        </Routes>
      </Router >
    </>
  )
}

export default App
