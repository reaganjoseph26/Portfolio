import React from 'react';

function About(props) {
    return (
        <div>
            { props.renderedComponent === "About" ? (<>About Me is selected</>) : (<>About me not selected</>) }
        </div>
    );
}

export default About;