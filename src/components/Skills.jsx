import React, { Fragment } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Fragment>
      <div className="section2">
        <div className="sub-page-title">
          <h4>Skills</h4>
          <div className="line-profile"></div>
        </div>
        <div className="about-skill">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="skill1"
          >
            <div className="skill">
              <div className="skill-name">
                <p>React.js</p>
                <p>80%</p>
              </div>
              <div className="skill-box">
                <div className="s1"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <p>Java Script</p>
                <p>85%</p>
              </div>
              <div className="skill-box">
                <div className="s2"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <p>HTML</p>
                <p>100%</p>
              </div>
              <div className="skill-box">
                <div className="s3"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <p>CSS</p>
                <p>88%</p>
              </div>
              <div className="skill-box">
                <div className="s4"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="skill2"
          >
            <div className="skill">
              <div className="skill-name">
                <p>Java</p>
                <p>78%</p>
              </div>
              <div className="skill-box">
                <div className="s5"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <p>Spring boot</p>
                <p>70%</p>
              </div>
              <div className="skill-box">
                <div className="s6"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <p>MongoDB</p>
                <p>92%</p>
              </div>
              <div className="skill-box">
                <div className="s7"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <p>MYSQL</p>
                <p>70%</p>
              </div>
              <div className="skill-box">
                <div className="s8"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
