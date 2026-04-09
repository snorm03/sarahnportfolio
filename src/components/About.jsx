import profilePic from "../img/profile_picture_edited.png";

export default function About() {
  return (
    <section id="about">
      <svg style={{ display: "none" }} aria-hidden="true">
        <defs>
          <filter id="paint-edge" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02 0.012"
              numOctaves="4"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="90"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="about-bg" aria-hidden="true" />
      <div className="about-container">
        <div className="about-grid">
          <img
            src={profilePic}
            alt="Sarah Norman"
            className="profile-pic"
          />
          <div className="about-body">
            <h2 className="about-title">
              Hi, <strong>Welcome In</strong>
            </h2>
            <p className="about-text">
              I'm a UX/UI designer and digital media graduate from the University of Central Florida
              with a passion for the iterative design processs. I work across Figma, HTML, CSS,
              JavaScript, and React allowing me to collaborate between design and development. I'm driven
              by creating digital experiences that are thoughtful, functional, and enjoyable to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
