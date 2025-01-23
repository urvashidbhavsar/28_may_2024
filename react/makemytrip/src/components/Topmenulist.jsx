import React from 'react'
import { Nav } from 'react-bootstrap';

const Topmenulist = ({ menuItems }) => {
    return (
        <>
            {
                menuItems.map(items =>
                    <Nav.Link href="#link" key={items} className='text-white'>
                        {items}
                    </Nav.Link>
                )
            }
        </>
    )
}

export default Topmenulist
