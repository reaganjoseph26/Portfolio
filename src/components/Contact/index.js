import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    //sync the state of the component formState with the user inputs.
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }

            }
        }
        // Without the spread operator(...), the formState object would be overwritten to only contain the name: value key pair.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (

        <section id="reach-out" className="contact">
            

                <div className="contact-form">
                    <h3 data-testid="h1tag">Contact Me</h3>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="contact-name">Your Name</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" id="contact-name" placeholder="Your Name" />
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                        <label htmlFor="contact-message">Message</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" id="contact-message" placeholder="Message"></textarea>

                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </form>
                    </div>
            
        </section>


                /* <section>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
           <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

            <button data-testid="button" type="submit">Submit</button>

          </form>
        </section> */
            
    );
}

export default Contact;