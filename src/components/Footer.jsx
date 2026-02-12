import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/maurigarciavg" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>

          <a href="https://www.linkedin.com/in/mauricio-garcia-valdecasas/" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>

          <a href="mailto:maurigvg88@gmail.com" className="social-icon">
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Mauri García. 
          <span className="built-with"> Hecho con React & Vite ⚛️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;