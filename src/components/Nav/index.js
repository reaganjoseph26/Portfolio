import React from 'react';

function Nav(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">The Portfolio </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item bg-dark" onClick={() => {props.setRenderedComponent("About")}}>
                                <a class="nav-link active" aria-current="page" href="#">About Me</a>
                            </li>
                            <li class="nav-item" onClick={() => {props.setRenderedComponent("Projects")}}>
                                <a class="nav-link active" aria-current="page" href="#">Projects</a>
                            </li>
                            <li class="nav-item" onClick={() => {props.setRenderedComponent("Contact")}}>
                                <a class="nav-link active" aria-current="page" href="#">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;