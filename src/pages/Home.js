// src/components/Home.js
import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Jewoo Song, a passionate developer with expertise in [Your
        Technologies].
      </p>

      <div className="introduction">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with a keen interest in web development
          and software engineering. I have experience working with various
          technologies including React, Node.js, and MongoDB. I love solving
          complex problems and building efficient, scalable solutions.
        </p>
        <img className="profile-image" src="profile.png" alt="Profile" />
      </div>

      <div className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>

      <div className="projects">
        <h2>Recent Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Project 1 description...</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Project 2 description...</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Project 3 description...</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
