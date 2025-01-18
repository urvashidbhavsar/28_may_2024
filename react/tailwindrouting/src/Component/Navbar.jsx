import React from 'react'
import Routing from './Routing'

const Navbar = () => {
    let menu = [
        { path: "", pathname: "Main" },
        { path: "./Component/Homepage", pathname: "Home" },
        { path: "./Component/About", pathname: "About" },
        { path: "./Component/Contact", pathname: "Contact" },
    ]
    return (
        <>
            <ul className='py-3 px-6 flex gap-7'>
                <Routing MenuItems={menu} />
                {/* <li><Link to="./Component/Homepage">Home</Link></li>
                <li><Link to="./Component/About">About</Link></li>
                <li><Link to="./Component/Contact">Contact</Link></li> */}
            </ul>
        </>
    )
}

export default Navbar
