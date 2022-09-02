import React from 'react'
import { Link,to } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Bank App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <p className="navbar-nav me-auto mb-2 mb-lg-0">
                        </p>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                 <Link className="nav-link" to={'/transaction'}>Transaction</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to={'/account'}>Accounts</Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar