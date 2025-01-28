import React from 'react'
import { Nav } from 'react-bootstrap';

const Topmenulist = ({ menuItems, setcolor }) => {
    return (
        <>
            {
                menuItems.map(items =>
                    <Nav.Link href="#link" key={items} className={setcolor}>
                        {items}
                    </Nav.Link>
                )
            }
        </>
    )
}

export default Topmenulist
