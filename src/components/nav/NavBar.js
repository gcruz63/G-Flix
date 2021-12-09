import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to='/'>Movies</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="#"
                        onClick={
                            () => {
                                localStorage.removeItem("gflix_customer")
                            }
                        }>
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    )
}
