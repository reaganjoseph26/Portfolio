import React from 'react';

function Projects(props) {
    return (
        <div>
             { props.renderedComponent === "Projects" ? (<>Projects is selected</>) : (<>Projects not selected</>) }
        </div>
    );
}

export default Projects;