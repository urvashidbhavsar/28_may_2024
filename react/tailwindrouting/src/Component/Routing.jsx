import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Routing = ({ MenuItems }) => {
    let menu = [
        { path: "", pathname: "Main" },
        { path: "./Component/Homepage", pathname: "Home" },
        { path: "./Component/About", pathname: "About" },
        { path: "./Component/Contact", pathname: "Contact" },
    ]
    let result = menu.map(items =>
        <li key={items.path}>
            <Link to={items.path}>{items.pathname}</Link>
        </li>
    )
    return result
}

export default Routing
