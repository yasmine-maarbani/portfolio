import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Yasmine
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://facebook.com/Yasmine.Maarbani"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/yasmine.maarbani"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/yasmine-maarbani"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yasmine Maarbani. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
