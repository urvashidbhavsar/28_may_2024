import React from 'react'
import useFetch from './useFetch'

const Callapi = () => {
    const [data] = useFetch("https://fakestoreapiserver.reactbd.com/walmart")
    return (
        <>
            {
                data && data.map(items =>
                    // console.log(items)
                    <p>{items.category}</p>
                )
            }
        </>
    )
}

export default Callapi
