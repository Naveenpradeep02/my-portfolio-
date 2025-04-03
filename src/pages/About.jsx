import { Fragment } from "react";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import SkillLogo from "../components/SkillLogo";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <motion.div className="about-container">
            <AboutMe />
            <Skills />
            <SkillLogo />
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
