import { AnimatePresence, motion } from "framer-motion";
import logoImg from "../assets/my-logo.png";
import { useEffect, useState } from "react";

const PageIntro = () => {
  const [showtext, setText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setText(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {showtext ? (
        <div className="intro-img">
          <motion.img
            key="uniqueKey"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={logoImg}
            alt=""
          />
        </div>
      ) : (
        <motion.div className="intro-container">
          <div className="right-intro">
            <div className="line-intro-right"></div>
          </div>
          <div className="left-intro">
            <div className="line-intro-left"></div>
          </div>
          <motion.h3
            key="uniqueKey"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome to my portfolio
          </motion.h3>
        </motion.div>
      )}{" "}
    </AnimatePresence>
  );
};

export default PageIntro;
