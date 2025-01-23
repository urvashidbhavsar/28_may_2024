import React from 'react'
import { Navbar } from 'react-bootstrap';

const Logo = ({ logo }) => {
    return (
        <>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" width={150} />
            </Navbar.Brand>
        </>
    )
}

export default Logo
