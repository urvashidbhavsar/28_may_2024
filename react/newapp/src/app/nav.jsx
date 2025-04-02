import React from 'react'
import Link from 'next/link'

const nav = () => {
    let menu = [
        { path: "/", pathname: "Home" },
        { path: "/about", pathname: "About" },
        { path: "/contact", pathname: "Contact" },
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                        <h1>Logo</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                menu.map(item =>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" href={item.path}>{item.pathname}</Link>
                                    </li>
                                )
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default nav
