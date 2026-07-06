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
      <h1 className="name"> <code>&lt; Miguel Campos /&gt;</code></h1>
      <p className="tagline"><code>&lt; Full-Stack &amp; AI Developer /&gt;</code></p>
      <p className="location">
        <FontAwesomeIcon icon={faLocationDot} /> Aveiro, Portugal · open to remote
      </p>

      {/* Contact Info Section */}
      <div className="contact-info">
          <code>
            <span className="const">const</span> <span className="contact">contacts</span>() = {'{ '}
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span> miguelccp@gmail.com</span>
            </div>
            <div className="contact-item" >
              <FontAwesomeIcon icon={faPhone} />
              <span> +351 919562259</span>
            </div>
            {' }'}
          </code>
      </div>

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

      {/* Footer section (separator + social) pushed to bottom */}
      <div className="sidebar-footer">
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
