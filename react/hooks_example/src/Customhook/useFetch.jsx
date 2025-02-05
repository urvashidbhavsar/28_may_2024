import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
    const [data, getData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => getData(data))
    }, [])

    return [data];
}

export default useFetch
