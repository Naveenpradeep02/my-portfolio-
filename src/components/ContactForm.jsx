import {
  faSeedling,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const ContactForm = () => {
  return (
    <Fragment>
      <div className="contact-form">
        <div className="page-title">
          <h4>Message Me</h4>
          <div className="line-profile"></div>
        </div>
        <form action="" id="form">
          <div className="input-box">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button className="submit-btn">
            <FontAwesomeIcon icon={faShare} className="send-icon" /> Send
            Message
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
