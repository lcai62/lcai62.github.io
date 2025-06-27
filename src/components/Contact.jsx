import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ShinyText from "./ShinyText";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        const response = await fetch("https://formspree.io/f/mgvypgjg", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        setLoading(false);

        if (response.ok) {
            setSubmitted(true);
            e.target.reset();
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            alert("Oops! Something went wrong.");
        }
    };

    return (
        <div className="contact-section"
             style={{
                 minWidth: "fit-content",
                 height: "100vh",
                 paddingLeft: "14vw",
                 paddingRight: "14vw",
                 paddingTop: "30vh",
                 zIndex: 1
             }}
        >

            <div className="contact-left">
                <div className="parallax-layer" data-depth="0.8">
                    <ShinyText
                        className="display-3 about-heading mb-4"
                        text="contact.md &#123;"
                        shimmerSpeed={3}
                        shimmerWidth={3}
                        gradientSpeed={4}
                    />
                </div>

                <div className="parallax-layer" data-depth="1.1">
                    <div className="contact-icons">
                        <a href="https://github.com/lcai62" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="me-3"/>
                            lcai62
                        </a>
                        <a href="mailto:leoncai@outlook.com">
                            <FontAwesomeIcon icon={faEnvelope} className="me-3"/>
                            leoncai@outlook.com
                        </a>
                        <a href="https://www.linkedin.com/in/leoncai62/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="me-3"/>
                            Leon Cai
                        </a>
                    </div>
                </div>

                <div className="parallax-layer" data-depth="0.8">
                    <ShinyText
                        className="mt-4 display-3 about-heading"
                        text="&#125;"
                        shimmerSpeed={3}
                        shimmerWidth={3}
                        gradientSpeed={4}
                    />
                </div>
            </div>


            <form className="contact-form w-full" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="6" placeholder="Your Message" required />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <button type="submit" disabled={loading}>
                    {submitted ? "Sent!" : "Send Message"}
                </button>
            </form>

        </div>
    );
};

export default Contact;
