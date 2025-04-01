import { Fragment } from "react";
import ContactFirst from "../components/ContactFirst";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <div className="about-container">
            <ContactFirst />
            <ContactForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
