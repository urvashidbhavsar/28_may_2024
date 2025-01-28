import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faHotel, faHome, faIgloo, faTrain, faBus, faCab, faIndianRupeeSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Buses from '../Buses.jsx'
import Cab from '../Cab.jsx'

const Header = () => {
    let menuitems = [
        { icon: faPlaneDeparture, menuname: "Flight" },
        { icon: faHotel, menuname: "Hotels" },
        { icon: faHome, menuname: "Homestays & villas" },
        { icon: faIgloo, menuname: "Holiday Packages" },
        { icon: faTrain, menuname: "Train" },
        { icon: faBus, menuname: "Buses" },
        { icon: faCab, menuname: "Cabs" },
        { icon: faIndianRupeeSign, menuname: "Forex Card & currency" },
        { icon: faLocationDot, menuname: "Travel Issurance" },]
    return (
        <>
            <Nav className="m-0 justify-content-between">
                <div className='d-flex justify-content-between gap-5 text-center mx-auto py-3 border-bottom border-2 border-dark'>
                    <BrowserRouter>
                        {
                            menuitems.map(items =>
                                <div key={items.menuname}>
                                    <FontAwesomeIcon icon={items.icon} className='fs-3' />
                                    <div>
                                        <Link to="" className='pt-3'>{items.menuname}</Link>
                                    </div>
                                </div>
                            )
                        }

                        <Router>
                            <Routes>
                                <Route path='' element=""></Route>
                            </Routes>
                        </Router>
                    </BrowserRouter>
                </div>
            </Nav >

        </>
    )
}

export default Header
