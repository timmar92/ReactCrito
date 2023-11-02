import React from 'react';

const ContactForm = () => {
    return (
        <section className="message-section">
            <div className="container">
                <div className="info">
                    <h2>Leave us a message for any information.</h2>
                </div>
                <form className="form" method="post">
                    <div className="name">
                        <input className="form-input" type="text" id="name" name="name" title="name" placeholder="Name*" tabIndex="1" />
                    </div>
                    <div className="email">
                        <input className="form-input" type="email" id="email" name="email" title="email" placeholder="Email*" tabIndex="1" />
                    </div>
                    <div className="message">
                        <textarea className="form-input" id="message" name="message" placeholder="Message*"></textarea>
                    </div>
                    <button className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;