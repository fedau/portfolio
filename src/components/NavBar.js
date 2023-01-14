import React from "react";
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <ul className="Nav">
            <li>
                <Link to="/portfolio/">Home</Link>
            </li>
            <li>
                <Link to="/portfolio/about">About</Link>
            </li>  
        </ul>
    )

}

export default NavBar