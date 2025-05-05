import React, { Fragment } from "react";
import profile from "../assets/profile3.png";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="about-container"
          >
            <div className="resume-section">
              <div className="page-title">
                <h4>Resume</h4>
                <div className="line-profile"></div>
              </div>
              <h2 style={{ fontSize: "28px" }}>Check My Resume</h2>
              <div className="resume-box">
                <div className="resume-right">
                  <div className="step">
                    <h3>Summary</h3>
                    <div className="step-info">
                      <div className="step-box1 ">
                        <div className="box-line"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="step-box2"
                      >
                        <h4>Professional Experience</h4>
                        <h5>D - Grow Digital Agency - Front End Developer</h5>
                        <div className="step-btn">2024 - 2025</div>
                        <p>
                          After my course, I joined as an Front End Developer,
                          where I learned and honed development skills to
                          contribute effectively to projects.
                        </p>
                      </motion.div>
                    </div>
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="step-box2"
                      >
                        <h4>Internship</h4>
                        <h5>Simplar Academy</h5>
                        <div className="step-btn">2024</div>
                        <ul>
                          <li>
                            I completed my full-stack development internship at
                            Simplar Academy, working on the Inten Pro project
                            using the MERN stack. I gained hands-on experience
                            in building both frontend and backend applications,
                            integrating MongoDB, Express.js, React.js, and
                            Node.js. This opportunity helped me enhance my
                            skills in API development, database management, and
                            responsive UI design.
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>

                  <div className="step ">
                    <h3>Education</h3>
                    <div className="step-info">
                      <div className="step-box1 step-2">
                        <div className="box-line"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="step-box2"
                      >
                        <h4>Full Stack Development</h4>
                        <div className="step-btn">2024</div>
                        <ul>
                          <li>Course - Besant Technologies</li>
                          <li>
                            Early in my career, I chose full-stack development
                            because of my fascination with the intersection of
                            technology and problem-solving. Driven by a passion
                            for crafting innovative solutions, I approach
                            development with a curious and analytical mindset,
                            constantly seeking to improve my skills and stay
                            up-to-date with the latest industry trends.
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="step-box2"
                      >
                        <h4> Bachelor of Computer Applications</h4>
                        <div className="step-btn">2021 - 2024</div>
                        <ul>
                          <li>Rajeswari Vedachalam Government Arts College,</li>
                          <li>Chengalpattu</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                  {/* <div className="step">
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="step-box2"
                      >
                        <h4> Higher Secondary Certificate</h4>
                        <div className="step-btn">2020 - 2021</div>
                        <ul>
                          <li>Rajeswari Vedachalam Government Arts College,</li>
                          <li>Chengalpattu</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="step-box2"
                      >
                        <h4> Secondary School Certificate</h4>
                        <div className="step-btn">2018 - 2019</div>

                        <ul>
                          <li>Rajeswari Vedachalam Government Arts College,</li>
                          <li>Chengalpattu</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div> */}
                </div>
                <div className="resume-left">
                  <div className="step-img">
                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      src={profile}
                      alt=""
                    />
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      className="online"
                    >
                      <div className="green-dot"></div>
                      <p>Available for hire</p>
                    </motion.div>
                    <div
                      className="step-avi"
                      onClick={() => {
                        window.open(
                          "resume/NaveenPradeep react.js(java)BCA -2024.pdf"
                        );
                      }}
                    >
                      📜 Download Resume
                    </div>
                  </div>
                  <div className="step">{/* <h3>Summary</h3> */}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
