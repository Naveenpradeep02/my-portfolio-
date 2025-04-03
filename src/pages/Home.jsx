import { Fragment } from "react";
import myimg from "../assets/bg-img.png";
import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="hero">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="text-container">
              <div className="title">
                <p>N</p>
                <p>A</p>
                <p>V</p>
                <p>E</p>
                <p>E</p>
                <p>N</p>
                <p className="dot">..</p>
                <p>P</p>
                <p>R</p>
                <p>A</p>
                <p>D</p>
                <p>E</p>
                <p>E</p>
                <p>P</p>
              </div>
              <div className="sub-title">
                <p>
                  I'm a passionate <span> Full Stack Developer </span>
                  from Chennai.
                </p>
              </div>
              <div className="home-menu">
                <Link className="active" to="/">
                  Home
                </Link>
                <Link to="/about">About</Link>
                <Link to="/project">Projects</Link>
                <Link to="/resume">Resume</Link>
              </div>
              <div className="home-social-icon">
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} className="icon " />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="icon " />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              </div>
              <div className="buttons">
                <button
                  className="btn btn1"
                  onClick={() => {
                    window.open(
                      "resume/NaveenPradeep react.js(java)BCA -2024.pdf"
                    );
                  }}
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Resume
                </button>

                <button
                  className="btn btn2 "
                  onClick={() => navigate("/contact")}
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="img-container"
          >
            <img src={myimg} alt="" />
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
