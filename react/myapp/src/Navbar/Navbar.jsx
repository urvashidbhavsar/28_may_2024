import Logo from './Logo'
import Nav from './Nav'
import './nav.css'

import React from 'react'
import Search from './Search'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <Logo />
                        <ul className='menu'>
                            <Nav />
                        </ul>
                        <Search />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
