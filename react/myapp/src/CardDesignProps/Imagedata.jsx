import React from 'react'

const Imagedata = ({ img, title }) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" style={{ maxWidth: "100%" }} />
                <h3>{title}</h3>
            </div>
        </>
    )
}

export default Imagedata
