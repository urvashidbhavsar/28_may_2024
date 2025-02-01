import React, { useRef } from 'react'
import Myvideo from '../video/json-server.mp4'

const Videoplay = () => {
    const createref = useRef(null);

    const videoplay = () => {
        createref.current.play()
    }
    const videopause = () => {
        createref.current.pause()
    }
    return (
        <>
            <button onClick={videoplay}>Play</button>
            <button onClick={videopause}>Pause</button>
            <hr />
            <video width={500} ref={createref}>
                <source src={Myvideo} />
            </video>
        </>
    )
}

export default Videoplay
