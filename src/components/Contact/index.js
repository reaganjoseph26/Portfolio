import React from 'react';

function Contact(props) {
    return (
        <div>
            { props.renderedComponent === "Contact" ? (<>Contact is selected</>) : (<>Contact not selected</>) }
        </div>
    );
}

export default Contact;