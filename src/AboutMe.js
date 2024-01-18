// src/AboutMe.js
import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Tanner Jones, a passionate frontend 
          developer with a love for crafting beautiful and user-friendly websites. I've honed my skills in HTML, CSS, JavaScript, Python and modern frontend libraries like React.
        </p>
        <p>
          When I'm not coding, you can find me exploring the latest web development trends, experimenting with new technologies, or enjoying a cup of Iced coffee while brainstorming creative solutions to design challenges.
        </p>
      </div>
      <div className="profile-picture">
        <img src="./Me.jpg" alt="Your Name" />
      </div>
    </section>
  );
}

export default AboutMe;
