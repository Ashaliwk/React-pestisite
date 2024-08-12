import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid abc">
        <a><img className="ms-lg-5" src={logo} alt="" /></a>
        <button className="navbar-toggler bg-#0069c7 justify-content-center" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/#about">About us</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/Contact">Contact us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/Signup">Signup</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</>
  )
}
