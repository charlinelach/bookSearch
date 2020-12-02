import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Google's Book Spy</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} >
                            Search
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} >
                            Saved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;