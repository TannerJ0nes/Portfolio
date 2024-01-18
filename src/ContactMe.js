import React from 'react';
import './ContactMe.css'; 
import codingImage from './Coding.png';
function ContactMe() {
  return (
    <section className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>
            Are you ready to start your next Coding Endevor?
        </p>
        <p>
          Feel free to reach out to me using the following methods:
        </p>
        <ul className="contact-list">
          <li>
            <a href="mailto:tannerjones2015@gmail.com" className="button-link">Email: tannerjones2015@gmail.com</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tanner-jones-881a62248/" target="_blank" rel="noopener noreferrer" className="button-link">LinkedIn Profile</a>
          </li>
          {/* Add more contact methods if needed */}
        </ul>
      </div>
      <div className="contact-image">
        <img src={codingImage} alt="Contact" />
      </div>
    </section>
  );
}

export default ContactMe;
