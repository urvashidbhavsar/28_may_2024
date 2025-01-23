import React from 'react'
import { Button, Nav } from 'react-bootstrap';


const Topmenubtn = ({ menuBtn }) => {
    // let menubtn = ["Login or Create Account", "IN | ENG", "INR"]
    return (
        <>
            {
                menuBtn.map(items =>
                    <Nav.Link href="#link" key={items.menu}>
                        <Button variant={items.varient}>{items.menu}</Button>
                    </Nav.Link>
                )
            }
        </>
    )
}

export default Topmenubtn
