import dustBuddiesCover from "../img/dust_buddies_portfolio.png";

export default function DustBuddiesCaseStudy({ onBack }) {
  return (
    <div className="case-study">
      <div className="case-study-container">
        <button className="case-study-back" onClick={onBack}>
          ← Back to Portfolio
        </button>

        <img
          src={dustBuddiesCover}
          alt="DustBuddies App"
          className="case-study-hero"
        />

        <h1 className="case-study-title">DustBuddies App</h1>

        <h2>Project Overview</h2>
        <p>
          DustBuddies is a mobile chore management application designed to reduce
          friction between roommates by transforming shared responsibilities into a
          collaborative, gamified experience. The app targets college students and
          young adults living in shared spaces, where communication breakdowns and
          uneven chore distribution are common.
        </p>
        <p>
          The core concept blends task management with social interaction and game
          mechanics. Users assign and complete chores, submit photo proof, and
          receive peer validation through a voting system. Progress is visualized
          through a shared "chore monster" that weakens as tasks are completed,
          reinforcing accountability and teamwork.
        </p>
        <p>
          A bulletin board feature further supports indirect communication, helping
          users address shared living issues without confrontation. From a visual
          standpoint, the app balances a clean, modern interface with playful
          elements, including customizable avatars and character-driven progression.
          This approach maintains usability while increasing engagement and
          long-term retention.
        </p>

        <h2>Statement of Work</h2>

        <h3>Project Scope</h3>
        <p>
          This project encompassed the end-to-end design and development of a mobile
          application prototype and functional backend system. The scope included UX
          research, interface design, prototyping, usability testing, and backend
          implementation.
        </p>

        <h3>Objectives</h3>
        <ul>
          <li>Design an intuitive system for assigning, tracking, and verifying shared chores</li>
          <li>Reduce interpersonal conflict through indirect communication tools</li>
          <li>Increase user engagement through gamification and visual progression</li>
          <li>Deliver a responsive, mobile-optimized experience for on-the-go users</li>
        </ul>

        <h3>Design &amp; UX Responsibilities</h3>
        <ul>
          <li>Developed information architecture, user flows, and navigation structure</li>
          <li>Designed low- and high-fidelity wireframes using Figma</li>
          <li>Created a cohesive design system including typography, color palette, iconography, and component styles</li>
          <li>Established a visual identity that balances clarity with playful engagement</li>
          <li>Designed key features including:
            <ul>
              <li>Task management and status tracking</li>
              <li>Photo-based task verification</li>
              <li>Voting system for peer approval</li>
              <li>Bulletin board for communication</li>
            </ul>
          </li>
        </ul>

        <h3>Usability Testing &amp; Iteration</h3>
        <ul>
          <li>Conducted think-aloud usability testing across multiple prototype iterations</li>
          <li>Identified key usability issues, including unclear task affordances and navigation confusion</li>
          <li>Refined interaction patterns and visual cues based on user feedback</li>
          <li>Reduced error rates and improved task completion clarity between low- and high-fidelity prototypes</li>
        </ul>

        <h3>Technical Implementation (Backend)</h3>
        <ul>
          <li>Built backend infrastructure using Firebase and Firestore</li>
          <li>Implemented real-time data synchronization for tasks, messaging, and group progress</li>
          <li>Designed and structured NoSQL database collections (users, groups, tasks, posts, channels, badges, etc.)</li>
          <li>Integrated Firebase Authentication for secure user management</li>
          <li>Developed core functionality including:
            <ul>
              <li>Task creation, status updates, and verification workflows</li>
              <li>Real-time voting system tied to task completion</li>
              <li>Messaging system with group and direct channels</li>
              <li>Bulletin board with posts, reactions, and comments</li>
              <li>Badge and reward tracking system</li>
            </ul>
          </li>
          <li>Implemented real-time listeners to ensure seamless updates across users without manual refresh</li>
        </ul>

        <h3>Additional Features</h3>
        <ul>
          <li>Designed and implemented QR code integration tied to a physical artifact, allowing users to unlock exclusive in-app items</li>
          <li>Ensured cross-device responsiveness and performance optimization</li>
          <li>Structured the app for scalability using a component-based architecture</li>
        </ul>

        <h3>Deliverables</h3>
        <ul>
          <li>High-fidelity interactive prototype</li>
          <li>Complete visual design system and style guide</li>
          <li>Usability testing reports and data visualizations</li>
          <li>Functional backend with real-time database integration</li>
          <li>Final site map and application architecture</li>
        </ul>
      </div>
    </div>
  );
}
