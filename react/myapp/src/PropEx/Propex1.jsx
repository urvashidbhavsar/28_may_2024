import React from 'react'

// this example for use props in single file
const Userval = (props) => {
    // pass as argument and used as attribute
    return <h2>Hi, {props.username} to my home at {props.city}</h2>
}

const Propex1 = () => {
    return (
        <>
            <Userval username="Rahul" city="Surat" />
            <Userval username="Raj" city="Valsad" />
            <Userval username="Avadh" city="Navsari" />
            <Userval username="Shital" city="Bardoli" />
            <Userval username="Mansi" city="Navsari" />
        </>
    )
}

export default Propex1
