import React from 'react'
import PropTypes from 'prop-types'

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
Propex1.propTypes = {
    username: PropTypes.string,
}
Propex1.defaultProps = {
    username: "User",
}
export default Propex1
