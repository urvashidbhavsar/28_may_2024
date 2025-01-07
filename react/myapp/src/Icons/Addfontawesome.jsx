import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons/faBarChart'
import { faMobile } from '@fortawesome/free-solid-svg-icons'

const Addfontawesome = () => {
    return (
        <>
            <FontAwesomeIcon icon={faBarChart} className='iconcss' />
            <FontAwesomeIcon icon={faMobile} />
            {/* <i className="fa-solid fa-bars"></i> */}
        </>
    )
}

export default Addfontawesome
