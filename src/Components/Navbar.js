import React from 'react'
import { Link } from "react-router-dom"

const Navbar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : "sidenav"}>
            <h1>Menu</h1>
            <ul>
                <li>
                    <Link to='/Welcome'>Home</Link>
                </li>
            </ul>
            <ul>
                <li> <a href='/Proyects'>Proyects</a></li>
            </ul>
            <ul>
                <li> <a href='/NewProyect'>Add Proyects</a></li>
            </ul>
            <ul>
                <li> <a href='/Tasks'>Tasks</a></li>
            </ul>
            <ul>
                <li> <a href='/NewTask'>Add Tasks</a></li>
            </ul>
            <ul>
                <li> <a href='/Tests'>Tests</a></li>
            </ul>
            <ul>
                <li> <a href='/NewTest'>Add Test</a></li>
            </ul>
            <ul>
                <li> <a href='/Defects'>Defects</a></li>
            </ul>
            <ul>
                <li> <a href='/NewDefect'>Add Defects</a></li>
            </ul>
            <ul>
                <li> <a href='/Login'>Login</a></li>
            </ul>
        </div>
    )
}
export default Navbar;
