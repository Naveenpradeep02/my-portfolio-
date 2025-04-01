import React, { Fragment } from "react";
import profile from "../assets/profile3.png";

const Resume = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <div className="about-container">
            <div className="resume-section">
              <div className="page-title">
                <h4>Resume</h4>
                <div className="line-profile"></div>
              </div>
              <h2>Check My Resume</h2>
              <div className="resume-box">
                <div className="resume-right">
                  <div className="step">
                    <h3>Summary</h3>
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <div className="step-box2">
                        <h4>Lorem.</h4>
                        <p>
                          Highly motivated Front-End Developer with hands-on
                          experience in building dynamic and responsive web
                          interfaces. Proficient in React.js, Vite.js, HTML,
                          CSS, Bootstrap, and JavaScript, with a solid
                          foundation in crafting user-friendly and visually
                          appealing designs. Currently advancing skills through
                          full-stack development training, specializing in
                          Spring Boot for backend development. Passionate about
                          coding, problem-solving, and applying technical
                          expertise to deliver innovative and engaging web
                          solutions.
                        </p>
                        {/* <ul>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul> */}
                      </div>
                    </div>
                  </div>

                  <div className="step ">
                    <h3>Education</h3>
                    <div className="step-info">
                      <div className="step-box1 step-2">
                        <div className="box-line"></div>
                      </div>
                      <div className="step-box2">
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
                      </div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <div className="step-box2">
                        <h4> Bachelor of Computer Applications</h4>
                        <div className="step-btn">2021 - 2024</div>
                        <ul>
                          <li>Rajeswari Vedachalam Government Arts College,</li>
                          <li>Chengalpattu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <div className="step-box2">
                        <h4> Higher Secondary Certificate</h4>
                        <div className="step-btn">2020 - 2021</div>
                        <ul>
                          <li>Rajeswari Vedachalam Government Arts College,</li>
                          <li>Chengalpattu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-info">
                      <div className="step-box1">
                        <div className="box-line"></div>
                      </div>
                      <div className="step-box2">
                        <h4> Secondary School Certificate</h4>
                        <div className="step-btn">2018 - 2019</div>

                        <ul>
                          <li>Rajeswari Vedachalam Government Arts College,</li>
                          <li>Chengalpattu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="resume-left">
                  <div className="step-img">
                    <img src={profile} alt="" />
                    <div className="online">
                      <div className="green-dot"></div>
                      <p>Available for hire</p>
                    </div>
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
                  <div className="step">
                    <h3>Summary</h3>
                    <div className="step-info">
                      <div className="step-box1 ">
                        <div className="box-line"></div>
                      </div>
                      <div className="step-box2">
                        <h4>Professional Experience</h4>
                        <h5>D - Grow Digital Agency - Front End Developer</h5>
                        <div className="step-btn">2025</div>
                        <p>
                          After my course, I joined as an Front End Developer,
                          where I learned and honed development skills to
                          contribute effectively to projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
