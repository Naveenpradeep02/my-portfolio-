import { Fragment } from "react";
import ContactFirst from "../components/ContactFirst";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
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
            <ContactFirst />
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
