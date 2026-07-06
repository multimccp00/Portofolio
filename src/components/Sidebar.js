import "../App.css";
import avatar from "../imgs/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone, faLocationDot, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Adding the necessary icons to the library
library.add(faEnvelope, faPhone, faLocationDot, faDownload, faGithub, faLinkedin, faInstagram, faFacebook);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="availability">
        <span className="availability-dot" /> Open to work
      </span>
      <img src={avatar} alt="avatar" className="avatar" />

      {/* Identity as a code object — "I am the object" */}
      <div className="identity-class">
        <code>
          <div className="cls-line">
            <span className="kw">class</span> <span className="classname">MiguelCampos</span> {'{'}
          </div>
          <div className="prop-line">
            <span className="prop">role</span> = <span className="str">"Full-Stack &amp; AI Developer"</span>
          </div>
          <div className="prop-line">
            <span className="prop">location</span> = <span className="str">"Aveiro, Portugal"</span>
          </div>
          <div className="prop-line">
            <span className="prop">remote</span> = <span className="bool">true</span>
          </div>
          <div className="prop-line">
            <span className="prop">email</span> = <a className="str" href="mailto:miguelccp@gmail.com">"miguelccp@gmail.com"</a>
          </div>
          <div className="prop-line">
            <span className="prop">phone</span> = <a className="str" href="tel:+351919562259">"+351 919562259"</a>
          </div>
          <div className="prop-line">
            <span className="prop">skills</span> = {'['}
          </div>
          <div className="stack-chips">
            {["React", "Node.js", "JavaScript", "Python", "PHP", "C#", "MySQL", "Docker"].map((t) => (
              <span className="stack-chip" key={t}>{t}</span>
            ))}
          </div>
          <div className="cls-line">{']'}</div>
          <div className="cls-line">{'}'}</div>
        </code>
      </div>

      {/* Footer section (CV + separator + social) pushed to bottom */}
      <div className="sidebar-footer">
        {/* Download CV */}
        <a
          className="cv-button"
          href={`${process.env.PUBLIC_URL}/Miguel-Campos-CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </a>
        <hr className="sidebar-separator" />
        {/* Social Links */}
        <div className="social">
          <a href="https://github.com/multimccp00" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
          <a href="https://www.linkedin.com/in/miguel-campos-358965b4/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href="https://www.instagram.com/miguelcamposcarphotography/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a href="https://www.facebook.com/miguelccp/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> 
          </a>
        </div>
      </div>
    </aside>
  );
}
