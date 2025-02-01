import React, { Children, createContext, useContext, useState } from 'react'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Createcontext = createContext()
const Settheme = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggletheme = () => {
        setTheme((set) => (set === "light") ? "dark" : "light")
    }

    return (
        <>
            <Createcontext.Provider value={{ theme, toggletheme }}>
                {children}
            </Createcontext.Provider>
        </>
    )
}
const Themechange = () => {
    let { theme, toggletheme } = useContext(Createcontext)

    let darktheme = {
        backgroundColor: "black",
        color: "white",
    }
    let lighttheme = {
        backgroundColor: "white",
        color: "black",
    }
    return (
        <>
            <div style={theme === "light" ? lighttheme : darktheme}>
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} onClick={toggletheme} />
                <p>Current Value : {theme}</p>
            </div>
        </>
    )
}

const Themesetup = () => {
    return (
        <>
            <Settheme>
                <Themechange></Themechange>
            </Settheme>
        </>
    )
}

export default Themesetup
