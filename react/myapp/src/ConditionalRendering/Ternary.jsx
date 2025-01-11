import React from 'react'

const Ternary = () => {
    const PersonDetails = ({ name, address }) => {
        return (address == "Surat") ?
            <div>{name} ✅</div>
            :
            <div>{name} 👎</div>
    }

    return (
        <>
            <PersonDetails name="Raj" address="Surat" />
            <PersonDetails name="Foram" address="Baroda" />
            <PersonDetails name="Ragini" address="Vapi" />
            <PersonDetails name="Aman" address="Surat" />
            <PersonDetails name="Dipesh" address="Bharuch" />
            <PersonDetails name="Hina" address="Rajkot" />
        </>
    )
}

export default Ternary
