import React, { Fragment, version } from "react";
import reactImage from "../assets/skilllogo/reactjs-svgrepo-com.png";
import jsImage from "../assets/skilllogo/js-svgrepo-com.png";
import cssImage from "../assets/skilllogo/css-3-svgrepo-com.png";
import htmlImage from "../assets/skilllogo/html-5-svgrepo-com.png";
import tailwindImage from "../assets/skilllogo/tailwind-svgrepo-com.png";
import bootImage from "../assets/skilllogo/bootstrap-svgrepo-com.png";
import framerImage from "../assets/skilllogo/black-mark.png";
import mongodbImage from "../assets/skilllogo/momgo.png";
import nodeImage from "../assets/skilllogo/nodejs-icon-logo-svgrepo-com.png";
import apiImage from "../assets/skilllogo/api-page-svgrepo-com.png";
import mysqlImage from "../assets/skilllogo/mysql-logo-svgrepo-com.png";
import javaImage from "../assets/skilllogo/java-svgrepo-com.png";
import springImage from "../assets/skilllogo/icons8-spring-boot-100.png";
import gitImage from "../assets/skilllogo/git-svgrepo-com.png";
import githubImage from "../assets/skilllogo/github-142-svgrepo-com.png";
import axiosImage from "../assets/skilllogo/favicon 1.png";
import jwtImage from "../assets/skilllogo/1989596 1.png";
import vercelImage from "../assets/skilllogo/vercel-fill-svgrepo-com.png";
import vsImage from "../assets/skilllogo/vs-code-svgrepo-com.png";
import intellijImage from "../assets/skilllogo/intellij-idea-svgrepo-com.png";
import netlifyImage from "../assets/skilllogo/netlify-6x 2.png";
import postmanImage from "../assets/skilllogo/postman-icon-svgrepo-com.png";
import expressImage from "../assets/skilllogo/express-svgrepo-com (1).png";

const SkillLogo = () => {
  return (
    <Fragment>
      <div className="section3">
        <div className="sub-page-title">
          <h4>Frontend Development</h4>
          <div className="line-profile"></div>
        </div>
        <div className="container">
          <div className="skill-logo">
            <img src={reactImage} alt="" />
            <p>React.js</p>
          </div>
          <div className="skill-logo">
            <img src={jsImage} alt="" />
            <p>Java Script</p>
          </div>
          <div className="skill-logo">
            <img src={tailwindImage} alt="" />
            <p>Tailwind</p>
          </div>
          <div className="skill-logo">
            <img src={htmlImage} alt="" />
            <p>HTML</p>
          </div>
          <div className="skill-logo">
            <img src={cssImage} alt="" />
            <p>CSS</p>
          </div>
          <div className="skill-logo">
            <img src={bootImage} alt="" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-logo">
            <img src={framerImage} alt="" />
            <p>Framer Motion</p>
          </div>
        </div>
        <div className="sub-page-title">
          <h4>Backend Development</h4>
          <div className="line-profile"></div>
        </div>
        <div className="container">
          <div className="skill-logo">
            <img src={nodeImage} alt="" />
            <p>Node.js</p>
          </div>
          <div className="skill-logo">
            <img src={expressImage} alt="" />
            <p>Express.js</p>
          </div>
          <div className="skill-logo">
            <img src={mongodbImage} alt="" />
            <p>MongoDB</p>
          </div>
          <div className="skill-logo">
            <img src={javaImage} alt="" />
            <p>Java</p>
          </div>
          <div className="skill-logo">
            <img src={mysqlImage} alt="" />
            <p>MY SQL</p>
          </div>
          <div className="skill-logo">
            <img src={springImage} alt="" />
            <p>Spring Boot</p>
          </div>
          <div className="skill-logo">
            <img src={jwtImage} alt="" />
            <p>JWT</p>
          </div>
          <div className="skill-logo">
            <img src={apiImage} alt="" />
            <p>RESTful APIs</p>
          </div>
          <div className="skill-logo">
            <img src={axiosImage} alt="" />
            <p>Axios</p>
          </div>
        </div>
        <div className="sub-page-title">
          <h4>Dev Tools</h4>
          <div className="line-profile"></div>
        </div>
        <div className="container">
          <div className="skill-logo">
            <img src={gitImage} alt="" />
            <p>Version Control</p>
          </div>
          <div className="skill-logo">
            <img src={vsImage} alt="" />
            <p>VS Code</p>
          </div>
          <div className="skill-logo">
            <img src={githubImage} alt="" />
            <p>GitHub</p>
          </div>
          <div className="skill-logo">
            <img src={intellijImage} alt="" />
            <p>Intellij</p>
          </div>
          <div className="skill-logo">
            <img src={postmanImage} alt="" />
            <p>Postman</p>
          </div>
          <div className="skill-logo">
            <img src={netlifyImage} alt="" />
            <p>Netlify</p>
          </div>
          <div className="skill-logo">
            <img src={vercelImage} alt="" />
            <p>Vercel</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillLogo;
