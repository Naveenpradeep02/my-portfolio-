import { Fragment } from "react";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import SkillLogo from "../components/SkillLogo";

const About = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <div className="about-container">
            <AboutMe />
            <Skills />
            <SkillLogo />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
