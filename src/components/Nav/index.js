import React from 'react';

function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <h1>Reagan Joseph</h1>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={() => {props.setRenderedComponent("About")}}>
                                <a className={`nav-link ${props.contactSelected && 'navActive'}`} aria-current="page" href="#About">About Me</a>
                            </li>
                            <li className="nav-item" onClick={() => {props.setRenderedComponent("Projects")}}>
                                <a className={`nav-link ${props.contactSelected && 'navActive'}`} aria-current="page" href="#Projects">Projects</a>
                            </li>
                            <li className="nav-item" onClick={() => {props.setRenderedComponent("Contact")}}>
                                <a className={`nav-link ${props.contactSelected && 'navActive'}`} aria-current="page" href="#Contact">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;