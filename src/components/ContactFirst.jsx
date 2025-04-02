import React, { Fragment } from "react";
import coffee from "../assets/coffee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactFirst = () => {
  return (
    <Fragment>
      <div className="Contact-section1">
        <div className="page-title">
          <h4>Contact</h4>
          <div className="line-profile"></div>
        </div>

        <div className="contact-coffee">
          <ol>
            <h2>Let's Have a Coffee ☕</h2>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
              Schedule a virtual coffee break with me
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
              Discuss design projects, ideas, or industry trends
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
              Network with fellow designers and professionals
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="about-icon" />
              Explore potential collaborations or mentorship opportunities
            </li>
          </ol>
          <div className="con-img">
            <img src={coffee} alt="" />
          </div>
        </div>
        <div className="connect">
          <div className="page-title">
            <h4>Reach out</h4>
            <div className="line-profile"></div>
          </div>
          <div className="contact-info">
            <a href="">
              <div className="contact-box">
                <div className="box-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                </div>
                <div className="box-text">
                  <h3>Email Me</h3>
                  <a href="" className="email">
                    naveenpradeep0987@gmail.com
                  </a>
                </div>
              </div>
            </a>
            <a href="">
              <div className="contact-box">
                <div className="box-icon">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="contact-icon"
                  />
                </div>
                <div className="box-text">
                  <h3>Call Me</h3>
                  <a href="">8870686660</a>
                </div>
              </div>
            </a>
            <a href="">
              <div className="contact-box">
                <div className="box-icon">
                  <FontAwesomeIcon icon={faShareAlt} className="contact-icon" />
                </div>
                <div className="box-text">
                  <h3>Social Profiles</h3>
                  <div className="contact-social">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="social-con-icon"
                      />
                    </a>
                    <a href="">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="social-con-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="contact-box">
                <div className="box-icon">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                  />
                </div>
                <div className="box-text">
                  <h3>My Address</h3>
                  <a href="">Chennai</a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactFirst;
