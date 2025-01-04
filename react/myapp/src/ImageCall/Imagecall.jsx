import React from 'react'
import Image from '../images/myimg.jpg'
import Newimg from '../images/new.jpg'

const Imagecall = () => {
    return (
        <>
            {/* if you want add image in React first it import than use */}
            <img src={Image} alt="" width={300} />
            <img src={Newimg} alt="" width={300} />
        </>
    )
}

export default Imagecall
