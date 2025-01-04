import React from 'react'
import Imagedata from './Imagedata'

const Cards = () => {
    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
                <Imagedata img="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg" title="Image 1" />

                <Imagedata img="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg" title="Image 2" />

                <Imagedata img="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_1801,h_954/https://assets.ubuntu.com/v1/622b4fe1-numpy-numbat-on-dell-xps-13.jpg" title="Image 3" />
            </div>
        </>
    )
}

export default Cards
