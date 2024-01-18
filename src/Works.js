import React from 'react';
import './Works.css'; 
import python1 from './Python1.jpg'; 
import python2 from './Python2.jpg';
import HTML1 from './HTML1.jpg';
import HTML2 from './HTML2.png';
import Pgdmin from './Pgadmin.png'

function Works() {
  return (
    <section className="works-page">
      <h2>My Works</h2>
      <p>
        Welcome to my works page! Here, you'll find a collection of my projects and creations.
        Feel free to explore and dive into the code on GitHub.
      </p>
      <div className="project-grid">
        <div className="project">
          <img src={python1} alt="Project 1" />
          <h3>Project 1: QAP 1</h3>
          <p>
            This Was my first Ever Project done with Keyin Collage where they Challenged us to create a basic Html page along with some Python Programs. This was my..humble beginnings!
          </p>
          <a href="https://github.com/TannerJ0nes/QAP1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={python2} alt="Project 2" />
          <h3>Project 2: QAP 2</h3>
          <p>
            This Was my Second Project with Keyin Collage you can slowly start to see how my skills in coding started to develop here and how i was thinking about little details that most poeple didnt need.
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML1} alt="Project 2" />
          <h3>Project 3: QAP 3</h3>
          <p>
            This Was my third Project with Keyin Collage. The html code is for a photorgraphy website and this is where you can see me further developing my design skills to make apealling websites to other people.
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-3" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML2} alt="Project 2" />
          <h3>Project 4: Sprint 1</h3>
          <p>
            This was my first ever sprint at keyin Collage Where we had a python program that ran a couple different programs from a menu and created a webpage all about the Toronto maple leafs! This was my first prject purely done with group work and where i realised how much i enjoyed group work!
          </p>
          <a href="https://github.com/TannerJ0nes/Sprint1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={python2} alt="Project 2" />
          <h3>Project 5: QAP 4</h3>
          <p>
            This Was my fifth Project with Keyin Collage. This is where I was introdced to Javascript and being combined with HTML among other things.
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-4-Files-TJ" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={python1} alt="Project 2" />
          <h3>Project 6: QAP 5</h3>
          <p>
            This was my sixth project at Keyin Collage. This was more python programming and more Javascript coding with some Json Files included!
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-5" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={python2} alt="Project 2" />
          <h3>Project 7: Sprint 2</h3>
          <p>
            This is my second group focused project at Keyin Collage. It is a sprint that incuded Javascript, Python, and Some coding in python for a course done at the collage using a DJI robot as a "rescue" bot
          </p>
          <a href="https://github.com/TannerJ0nes/Final-Sprint-Term-1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML1} alt="Project 2" />
          <h3>Project 8: QAP 7</h3>
          <p>
            This Was my Eighth Project with Keyin Collage everything from this on is my second term at keyin. Most of this project is done using java script and possibly React! This particular project was to make a store like page with some nice css!
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-1-Term-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={python2} alt="Project 2" />
          <h3>Project 9: QAP 8</h3>
          <p>
            This was my ninth project at Keyin Collage and my second in my second term!. It was just a file with some Javascript problems that we had to solve.
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-2-Term-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML2} alt="Project 2" />
          <h3>Project 10: Sprint 3</h3>
          <p>
           This was my Tenth Prject at Keyin Collage! This Was my third project that was focused on making a website that could access a database and display filtered images of different dog breeds.
          </p>
          <a href="https://github.com/TannerJ0nes/dog-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={python2} alt="Project 2" />
          <h3>Project 11: QAP 9</h3>
          <p>
            This was my eleventh project at Keyin Collage. It was a project using using Json servers and React Routers! It is just a simple webpage that allows you to add, edit and remove feedback.
          </p>
          <a href="https://github.com/TannerJ0nes/QAP-3-Term-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML2} alt="Project 2" />
          <h3>Project 11: Sprint 4</h3>
          <p>
           This Was my 11th Project at Keyin Collage, This was a Team Based Sprint which goal was to make a semi working Shopping experience for the user with the theme of action figures and things like them!
          </p>
          <a href="https://github.com/TannerJ0nes/Final-Sprint-Term-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML2} alt="Project 2" />
          <h3>Project 12: Sprint 4 Part:2 </h3>
          <p>
           This Was my 12th Project at Keyin Collage, This is the Github link to this very Website! If you are wondering how I went about making this website you can take a look At it Download it and Take a look At the file!
          </p>
          <a href="https://github.com/TannerJ0nes/Final-Sprint-Portfolio" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={Pgdmin} alt="Project 2" />
          <h3>Project 13: QAP 10 </h3>
          <p>
           This was my 13th project at Keyin Collage in my third Term! It's an assortment of SQL statements that I was tasked to get running in a database Using Pgadmin!
          </p>
          <a href="https://github.com/TannerJ0nes/QAP1-Term3-Database" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML2} alt="Project 2" />
          <h3>Project 14: QAP 11 </h3>
          <p>
           This was my 14th Project at keyin Collage, it contains so of my first uses of Node.js!
          </p>
          <a href="https://github.com/TannerJ0nes/node-assessment-project/tree/main/Task2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML1} alt="Project 2" />
          <h3>Project 14: QAP 11 </h3>
          <p>
           This was my 14th Project at keyin Collage, it contains so of my first uses of Node.js!
          </p>
          <a href="https://github.com/TannerJ0nes/node-assessment-project" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={HTML2} alt="Project 2" />
          <h3>Project 15: QAP 12 </h3>
          <p>
           This was my 15th project at Keyin Collage! It was my Second time Using JS for this term!
          </p>
          <a href="https://github.com/TannerJ0nes/QAP2JS-TannerJones" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={Pgdmin} alt="Project 2" />
          <h3>Project 16: QAP 13 </h3>
          <p>
           This was my 16th Project at Keyin Collage! It's my attempt at making at making a webpage that Talked to a database and could perform various different tasks to the database
          </p>
          <a href="https://github.com/TannerJ0nes/QAP3_TannerJonesDB/tree/main" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project">
          <img src={Pgdmin} alt="Project 2" />
          <h3>Project 17: Sprint 5 </h3>
          <p>
           This was my 17th project at Keyin Collage. It was a team effort! It's a website that can search multiple databases at one time and then display their information to it, it also has features for loggin searches as well as loggin in.
          </p>
          <a href="https://github.com/joshwhite2/S3FinalSprint/tree/JW2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        {/* Repeat the project blocks with images */}
        
      </div>
      <p align= 'Center'>
          More Projects to come!
        </p>

    </section>
  );
}

export default Works;
