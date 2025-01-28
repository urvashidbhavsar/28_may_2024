import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import Topmenulist from './Topmenulist';
import Topmenubtn from './Topmenubtn';

const Topheader = () => {
    let menulist = ["List your property", "Introducing myBiz", "My Trips"]

    let menubtn = [
        { menu: "Login or Create Account", varient: "primary" },
        { menu: "IN | ENG", varient: "light" },
        { menu: "INR", varient: "light" }
    ]
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: "#2d5a8e" }}>
                <Container>
                    <Logo logo="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" />
                    <Navbar.Toggle aria-controls="homenav" />
                    <Navbar.Collapse id="homenav" className='justify-content-end'>
                        <Nav className="m-0 align-items-center">
                            <Topmenulist menuItems={menulist} setcolor="text-white" />
                            <Topmenubtn menuBtn={menubtn} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Topheader

