import React from 'react'
import Mycss from './style.module.css'

const Module = () => {
    return (
        <>
            <div className={Mycss.mydiv}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda, quia earum inventore consequuntur laboriosam ipsam eaque id repellat modi numquam culpa ut illo molestiae est totam fugiat, adipisci corrupti!
            </div>
            <h1 className={Mycss.title}>Hello</h1> 
        </>
    )
}

export default Module
