// src/Expertise.js
import React from 'react';
import './Expertise.css';

function Expertise() {
  const expertiseItems = [
    {
      icon: './JS.png',
      title: 'JavaScript',
      description: 'Experienced in building interactive and dynamic web applications with JavaScript. Familiar with server-side development using Node.js and Express framework.',
    },
    {
      icon: './React.jpg',
      title: 'React',
      description: 'Proficient in developing UI components and user interfaces using React library.',
    },
    {
      icon: './HTML.jpg', 
      title: 'HTML/CSS',
      description: 'Skilled in creating responsive and visually appealing web designs using HTML and CSS.',
    },
    {
      icon: './Python.png', 
      title: 'Python',
      description: 'Proficient in Python programming with experience in building applications, scripts, and automation tools.',
    },
    {
      icon: './Agile.png',
      title: 'Agile Development',
      description: 'Knowledgeable in Agile development methodologies for efficient project management and delivery.',
    },
    {
      icon: './technical.jpg',
      title: 'Technical Writing',
      description: 'Skilled in creating technical documentation to communicate complex information clearly and concisely.',
    },
    {
      icon: './Version.png',
      title: 'Version Control & Project Management',
      description: 'Experienced in using Git and GitHub for version control. Familiar with project management tools like Trello.',
    },
    {
      icon: './HTML.jpg',
      title: 'Introduction to Web Development',
      description: 'Solid understanding of HTML, CSS, and basic design principles for web development.',
    },
    {
      icon: './Python.png',
      title: 'Introduction to Programming with Python',
      description: 'Proficient in Python programming and familiar with basic programming concepts.',
    },
    {
      icon: './UIUX.png',
      title: 'UI/UX Design',
      description: 'Knowledgeable in design theory, prototyping, and design tools such as Figma.',
    },
    {
      icon: './FrontEnd.jpg',
      title: 'Front End Development',
      description: 'Further expertise in HTML, CSS, and basic JavaScript. Proficient in React for building interactive user interfaces.',
    },
    {
      icon: './JS.png',
      title: 'Programming Concepts with JavaScript',
      description: 'Advanced understanding of asynchronous programming.',
    },
    {
      icon: './Database.png',
      title: 'Database Programming & Data Processing',
      description: 'Experience in SQL, PostgreSQL, and MongoDB for database programming and data processing.',
    },
    {
      icon: './node.png',
      title: 'Full-Stack JavaScript',
      description: 'Proficient in Node.js and building RESTful APIs for full-stack JavaScript development.',
    },
    {
      icon: './Java.png',
      title: 'Advanced Programming: Java',
      description: 'Knowledgeable in Java programming for advanced software development.',
    },
    // Add more expertise items as needed
  ];

  const awsCertificationLink = "https://www.credly.com/users/tanner-jones.5f96d9ae";

  return (
    <section className="expertise">
      <h2>My Expertise</h2>
      <div className="expertise-blocks">
        {expertiseItems.map((item, index) => (
          <div key={index} className="expertise-block">
            <div className="expertise-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
        
        {/* New section for AWS Certification Link */}
        <div className="expertise-block">
          <div className="expertise-icon">
            {/* You can use an AWS icon or any other suitable icon */}
            <img src="./AWS.png" alt="AWS Certification" />
          </div>
          <h3>AWS Certification</h3>
          <p>Check out my AWS certifications on Credly:</p>
          <a href={awsCertificationLink} target="_blank" rel="noopener noreferrer">
            View AWS Certifications
          </a>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
