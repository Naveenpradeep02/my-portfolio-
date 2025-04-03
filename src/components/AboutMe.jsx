import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import profile from "../assets/profile2.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Fragment>
      <motion.div className="section1">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="right"
        >
          <div className="page-title">
            <h4>About</h4>
            <div className="line-profile"></div>
          </div>
          <h2>Learn more about me</h2>
          <div className="imgs">
            <img src={profile} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="left"
        >
          <h3> Full Stack Developer </h3>
          <p>
            Hi, I'm Naveen Pradeep, a technophile who can quickly adapt to new
            environments and technologies, Full Stack Developer from Chennai,
            India. Currently working at D-Grow ma,
          </p>
          <div className="about-info">
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>Website:</span>www.naveeenpradeep.com
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>Phone:</span>8870686660
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>City:</span>Chennai
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>Degree:</span>BCA
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>Emai:</span>
                <p className="email-text">naveenpradeep0987@gmail.com</p>
              </li>

              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>Website:</span>
              </li>
            </ul>
          </div>
          <p>
            I'm driven by a passion for facing and overcoming challenges. I love
            to learn, analyze, and develop, with strengths in analysis and rapid
            development. I also enjoy connecting with clients to discuss
            projects and ensure their requirements are met or exceeded.
          </p>
          <p>
            My career goal is to continually improve my skills while providing
            my efficiency to contribute to my team's success. I aim to surpass
            expectations and help drive the growth of the organization.
          </p>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default AboutMe;
