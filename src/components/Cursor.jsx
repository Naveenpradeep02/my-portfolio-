import { Fragment, useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHoveringLight, setIsHoveringLight] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setTrail({ x: e.clientX, y: e.clientY });
      }, 100);

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement) {
        const bgColor = window.getComputedStyle(hoveredElement).backgroundColor;
        const color = window.getComputedStyle(hoveredElement).color;

        if (isLightColor(bgColor) || isLightColor(color)) {
          setIsHoveringLight(true);
        } else {
          setIsHoveringLight(false);
        }

        if (hoveredElement.tagName === "BUTTON") {
          setIsHoveringButton(true);
        } else {
          setIsHoveringButton(false);
        }
      }
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const isLightColor = (rgb) => {
    if (!rgb || !rgb.startsWith("rgb")) return false;
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return (r + g + b) / 3 > 200;
  };
  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          left: trail.x,
          top: trail.y,
          width: isHoveringButton ? "60px" : "40px",
          height: isHoveringButton ? "60px" : "40px",
          border: `2px solid ${isHoveringLight ? "#6c01c0" : "white"}`,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.7 : 1})`,
          transition:
            "transform 0.15s ease-out, width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          background: "transparent",
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "10px",
          height: "10px",
          backgroundColor: isHoveringLight ? "#6c01c0" : "white",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "background-color 0.2s ease",
        }}
      ></div>
    </Fragment>
  );
};

export default Cursor;
