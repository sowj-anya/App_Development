import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to the Hall Booking System. Our mission is to provide a seamless experience for booking venues for your events. 
                Whether you're planning a wedding, corporate event, or any special occasion, we offer a diverse range of halls to fit your needs.
            </p>
            <div className="team">
                <h2>Our Team</h2>
                <p>
                    Our team consists of dedicated professionals committed to making your booking experience as smooth as possible. 
                    From our customer service representatives to our venue management team, we're here to assist you every step of the way.
                </p>
            </div>
        </div>
    );
}

export default About;