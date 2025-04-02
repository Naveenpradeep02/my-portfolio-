import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ProjectList } from "../data/ProjectData";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

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
                {ProjectList.map((data, index) => (
                  <div key={index.id} className="project-box">
                    <div className="project-img">
                      <img src={data.ProjectImage} alt="" />
                    </div>
                    <div className="project-text">
                      <div className=" text-box1"></div>
                      <div className=" text-box2"></div>
                      <h4>{data.projectName}</h4>
                      <p>{data.title}</p>
                      <div
                        className="project-icon"
                        onClick={() => {
                          navigate("/projectdetials", {
                            state: { project: data },
                          });
                        }}
                      >
                        <div className="view-btn">
                          <FontAwesomeIcon icon={faLink} /> View
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
