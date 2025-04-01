import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import profile from "../assets/profile2.jpg";

const AboutMe = () => {
  return (
    <Fragment>
      <div className="section1">
        <div className="right">
          <div className="page-title">
            <h4>About</h4>
            <div className="line-profile"></div>
          </div>
          <h2>Learn more about me</h2>
          <div className="imgs">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="left">
          <h3> Full Stack Developer </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            omnis cupiditate sit sapiente, consequatur ipsam aperiam quae
            repellendus corporis architecto ipsa excepturi, harum debitis iusto
            a tempora magnam eum pariatur?
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
                <span>Emai:</span>naveenpradeep0987@gmail.com
              </li>

              <li>
                <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
                <span>Website:</span>
              </li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            enim. Odio dolor unde ipsum iusto culpa nesciunt ipsam voluptas
            minima, totam laborum illum veritatis consequatur voluptate non
            dolorem atque impedit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum quia odit animi commodi, nisi deserunt
            suscipit, magnam voluptatibus dicta perspiciatis in dolores? Amet
            recusandae voluptas tempore dolor sapiente dolore porro.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
