import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to='/'>Back</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to='/add/newMovie'>Add a movie</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to='/your/watchlist'>Watchlist</Link>
                </li>

                <li className="navbar__item active">
                    <Link className="navbar__link" to="#"
                        onClick={
                            () => {
                                localStorage.removeItem("gflix_user")
                            }
                        }>
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    )
}
