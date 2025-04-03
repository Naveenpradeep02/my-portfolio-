import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetial = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;
  const techList = Array.isArray(project.tech)
    ? project.tech
    : project.tech.split(",");

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
            <div className="page-title">
              <h4 className="back-btn" onClick={() => navigate("/project")}>
                <FontAwesomeIcon icon={faArrowLeft} /> back
              </h4>
              <div className="line-profile"></div>
            </div>
            <div className="project-detial-container">
              <div className="project-det-img">
                <img src={project.ProjectImage} alt="" />
              </div>
              <div className="project-det-text">
                <h3>{project.projectName}</h3>
                <h4>Project Title : {project.title}</h4>
                <h4>
                  Website :{" "}
                  <a href={project.projectUrl} target="blank">
                    {project.projectUrl}
                  </a>
                </h4>
                <p className="live-project">
                  <div
                    style={{
                      backgroundColor:
                        project.status === "live"
                          ? "rgb(0, 255, 0)"
                          : "rgb(255, 200, 0)",
                    }}
                  ></div>
                  {project.status}
                </p>
                <div className="tech-box">
                  {techList.map((e) => (
                    <div className="tech-skill">{e.trim()}</div>
                  ))}
                </div>
                <p>{project.projectDes}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDetial;
