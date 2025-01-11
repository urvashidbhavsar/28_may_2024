import React from 'react'

const Ifstatementex = () => {
    const PersonDetails = ({ name, address }) => {
        if (address == "Surat") {
            return <div>{name} ✅</div>
        }
        else {
            return <div>{name} 👎</div>
        }
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

export default Ifstatementex
