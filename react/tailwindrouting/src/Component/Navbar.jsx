import React from 'react'
import Routing from './Routing'

const Navbar = ({ mymenu }) => {
    return (
        <>
            <ul>
                <Routing MenuItems={mymenu} />
                {/* <li><Link to="./Component/Homepage">Home</Link></li>
                <li><Link to="./Component/About">About</Link></li>
                <li><Link to="./Component/Contact">Contact</Link></li> */}
            </ul>
        </>
    )
}

export default Navbar
