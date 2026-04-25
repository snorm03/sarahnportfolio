import dustBuddiesCover from "../img/dust_buddies_portfolio.png";
import calmHome from "../img/calm-home.png";
import calmAudio from "../img/calm-audio.png";
import calmProfile from "../img/calm-profile.png";
import cmsHome from "../img/cms-home.png";
import cmsComments from "../img/cms-comments.png";

export default function Projects({ onNavigate }) {
  return (
    <section id="projects">
      <div className="projects-header">
        <h2 className="projects-heading">Check out what I've been up to</h2>
      </div>

      <article className="project-item">
        <span className="project-number">01</span>
        <div className="project-content">
          <h3>
            <a href="https://mydigitaldiaryproject.netlify.app/" target="_blank" rel="noopener noreferrer">
              My Digital Diary
            </a>
          </h3>
          <p>
            A web-based digital journaling application designed for personal
            reflection and everyday note-taking. Built with a clean, accessible
            interface that makes writing feel effortless and enjoyable.
          </p>
          <iframe
            src="https://mydigitaldiaryproject.netlify.app/"
            className="project-embed"
            title="My Digital Diary site preview"
            loading="lazy"
          />
        </div>
      </article>

      <article className="project-item">
        <span className="project-number">02</span>
        <div className="project-content">
          <h3>
            <a href="https://driftwoodcafeauth.netlify.app/" target="_blank" rel="noopener noreferrer">
              Driftwood Cafe
            </a>
          </h3>
          <p>
            A full website for Driftwood Cafe, a coffee shop centered around
            community connection. Designed and built with a warm, welcoming
            aesthetic that reflects the cafe's identity, featuring intuitive
            navigation and a layout optimized for both desktop and mobile visitors.
          </p>
          <iframe
            src="https://driftwoodcafeauth.netlify.app/"
            className="project-embed"
            title="Driftwood Cafe site preview"
            loading="lazy"
          />
        </div>
      </article>

      <article className="project-item">
        <span className="project-number">03</span>
        <div className="project-content">
          <h3>
            <a href="https://glowreviewproject.netlify.app/" target="_blank" rel="noopener noreferrer">
              GlowReview
            </a>
          </h3>
          <p>
            A beauty and skincare review platform where users can discover,
            rate, and share their experiences with products. Designed with a
            clean, approachable interface that makes navigating reviews and
            finding the right products feel intuitive and enjoyable.
          </p>
          <iframe
            src="https://glowreviewproject.netlify.app/"
            className="project-embed"
            title="GlowReview site preview"
            loading="lazy"
          />
        </div>
      </article>

      <article className="project-item">
        <span className="project-number">04</span>
        <div className="project-content">
          <h3>DustBuddies</h3>
          <p>
            A mobile chore management app that transforms shared responsibilities
            into a collaborative, gamified experience. Features photo-based task
            verification, a peer voting system, a shared "chore monster" that
            responds to group progress, and a bulletin board for indirect
            communication between roommates.
          </p>
          <button
            className="project-img-btn"
            onClick={() => onNavigate("dustbuddies")}
            aria-label="View DustBuddies case study"
          >
            <img
              src={dustBuddiesCover}
              alt="DustBuddies App"
              className="cms-project-img"
            />
          </button>
        </div>
      </article>

      <article className="project-item">
        <span className="project-number">05</span>
        <div className="project-content">
          <h3>
            <a href="https://www.figma.com/design/7fkRq7ZH2gZwm1pXdi56qB/Mobile-App-Redesign?node-id=0-1&t=AbceVJ5NZuuBFGwd-1">
              Calm App Redesign
            </a>
          </h3>
          <p>
            I reimagined the Calm app's interface with a focus on clarity,
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
              className="project-img"
            />
            <img
              src={calmAudio}
              alt="Calm App Redesign Audio Page"
              className="project-img"
            />
            <img
              src={calmProfile}
              alt="Calm App Redesign Profile Page"
              className="project-img"
            />
          </div>
        </div>
      </article>

      <article className="project-item">
        <span className="project-number">06</span>
        <div className="project-content">
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
              className="cms-project-img"
            />
            <img
              src={cmsComments}
              alt="Album Review CMS Comments"
              className="cms-project-img"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
