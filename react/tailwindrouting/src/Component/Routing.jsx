import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Routing = ({ MenuItems }) => {
    let result = MenuItems.map(items =>
        <li key={items.path} className='p-2 text-xl text-rose-800 hover:text-blue-300'>
            <Link to={items.path}>{items.pathname}</Link>
        </li>
    )
    return result
}

export default Routing
