import React from 'react';

function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">The Portfolio </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item bg-dark" onClick={() => {props.setRenderedComponent("About")}}>
                                <a className="nav-link active" aria-current="page" href="#">About Me</a>
                            </li>
                            <li className="nav-item" onClick={() => {props.setRenderedComponent("Projects")}}>
                                <a className="nav-link active" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item" onClick={() => {props.setRenderedComponent("Contact")}}>
                                <a className="nav-link active" aria-current="page" href="#">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;