import { Fragment, useState } from "react";
import myLogo from "../assets/my-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomePage = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isProject = location.pathname === "/project";
  const isContact = location.pathname === "/contact";
  const isResume = location.pathname === "/resume";
  return (
    <Fragment>
      <div className="">
        <header>
          <div className="logo">
            <img src={myLogo} alt="" />
            {!isHomePage && (
              <div className="social-icons">
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} className="icon " />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="icon " />
                </a>
              </div>
            )}
          </div>
          {!isHomePage && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="nav-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className={isAbout ? "active" : ""}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" className={isProject ? "active" : ""}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resume"
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className={isResume ? "active" : ""}
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className={isContact ? "active" : ""}>
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
          <div className="menu-bar">
            <button className="open-menu" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={menuOpen ? faX : faBars}
                className="menu-icon"
              />
            </button>
          </div>
        </header>
        <div className={`mobile-menu-list ${menuOpen ? "show-menu" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className={isHomePage ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className={isAbout ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className={isProject ? "active" : ""}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className={isResume ? "active" : ""}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className={isContact ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
