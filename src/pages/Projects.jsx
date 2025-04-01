import { Fragment } from "react";
import project1 from "../assets/img/image 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <div className="about-container">
            <div className="project-container">
              <div className="page-title">
                <h4>Projects</h4>
                <div className="line-profile"></div>
              </div>
              <h2>My Works</h2>
              <div className="project-list">
                <div className="project-box">
                  <div className="project-img">
                    <img src={project1} alt="" />
                  </div>
                  <div className="project-text">
                    <div className=" text-box1"></div>
                    <div className=" text-box2"></div>
                    <h4>Project 1</h4>
                    <p>lorem</p>
                    <div className="project-icon">
                      <div className="view-btn">
                        <FontAwesomeIcon icon={faLink} /> View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box">
                  <div className="project-img">
                    <img src={project1} alt="" />
                  </div>
                  <div className="project-text">
                    <div className=" text-box1"></div>
                    <div className=" text-box2"></div>
                    <h4>Project 1</h4>
                    <p>lorem</p>
                    <div className="project-icon">
                      <div className="view-btn">
                        <FontAwesomeIcon icon={faLink} /> View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box">
                  <div className="project-img">
                    <img src={project1} alt="" />
                  </div>
                  <div className="project-text">
                    <div className=" text-box1"></div>
                    <div className=" text-box2"></div>
                    <h4>Project 1</h4>
                    <p>lorem</p>
                    <div className="project-icon">
                      <div className="view-btn">
                        <FontAwesomeIcon icon={faLink} /> View
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

export default Projects;
