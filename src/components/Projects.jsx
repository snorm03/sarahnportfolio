import React from "react";
import calmHome from "../img/calm-home.png";
import calmAudio from "../img/calm-audio.png";
import calmProfile from "../img/calm-profile.png";
import cmsHome from "../img/cms-home.png";
import cmsComments from "../img/cms-comments.png";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="project-title">Check out what I've been up to 💭📱 </h2>
      <div className="project-calm-app">
        <h3>
          <a href="https://www.figma.com/design/7fkRq7ZH2gZwm1pXdi56qB/Mobile-App-Redesign?node-id=0-1&t=AbceVJ5NZuuBFGwd-1">
            Calm App Redesign
          </a>
        </h3>
        <p>
          I reimagined the Calm app’s interface with a focus on clarity,
          comfort, and modern appeal. Every element was thoughtfully redesigned
          to ensure that user interactions feel intuitive and soothing. I
          introduced a refreshed color palette to minimize visual strain and
          evoke a serene, sleep-friendly atmosphere—helping users unwind with
          ease.
        </p>

        <div className="image-row">
          <img
            src={calmHome}
            alt="Calm App Redesign Homepage"
            className="project-img hover-grow"
          />
          <img
            src={calmAudio}
            alt="Calm App Redesign Audio Page"
            className="project-img hover-grow"
          />
          <img
            src={calmProfile}
            alt="Calm App Redesign Profile Page"
            className="project-img hover-grow"
          />
        </div>
      </div>

      <div className="project-cms-app">
        <h3>
          <a href="https://students.gaim.ucf.edu/~sa519315/dig3134c/assignments/assignment05/login.php">
            Album Review CMS
          </a>
        </h3>
        <p>
          This project is a custom-built album review content management system
          developed with PHP. I leveraged MySQL to implement dynamic content
          functionality, allowing users to add, view, and manage album reviews
          in real time. The system is designed to be both functional and
          user-friendly, with a clean structure that supports easy content
          updates.
        </p>
        <div className="image-column">
          <img
            src={cmsHome}
            alt="Album Review CMS Home"
            className="cms-project-img hover-grow"
          />
          <img
            src={cmsComments}
            alt="Album Review CMS Comments"
            className="cms-project-img hover-grow"
          />
        </div>
      </div>
      <div className="project-react-app">
        <h3>
          <a href="https://www.youtube.com/shorts/ybOvsA-Mhmo">
            {" "}
            React Native Exercise App
          </a>
        </h3>
        <p>
          This mobile app was designed to help users track two common types of
          workouts: repetition-based and duration-based exercises. Built using
          React Native, the application offers a clean, intuitive interface and
          smooth interaction patterns to support a seamless workout experience.
        </p>
      </div>
    </section>
  );
}
