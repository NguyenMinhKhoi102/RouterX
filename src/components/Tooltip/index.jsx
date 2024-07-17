import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useHover } from "@/hooks";
import Portal from "../Portal";

const TooltipBase = ({ text, children, bodyStyle, ...props }) => {
  const { hovered, nodeRef: hoverRef } = useHover();
  const [coords, setCoords] = useState({});
  const nodeRef = useRef(null);
  const handleOver = (e) => {
    console.log(e.target.getBoundingClientRect());
    console.log(window.scrollY);
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <>
      <div
        ref={hoverRef}
        onMouseOver={handleOver}
        style={{ display: "inline" }}
      >
        {children}
      </div>
      <CSSTransition
        in={hovered}
        classNames="fade"
        timeout={250}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <Portal
          ref={nodeRef}
          bodyStyle={{
            position: "absolute",
            backgroundColor: "black",
            color: "white",
            padding: "12px",
            borderRadius: "4px",
            transform: "translate(-50%, -100%)",
            width: "max-content",
            maxWidth: "250px",
            zIndex: 9999,
            top: coords.top - coords.height / 2 + window.scrollY,
            left: coords.left + coords.width / 2 + window.scrollX,
            ...bodyStyle,
          }}
          {...props}
        >
          {text}
        </Portal>
      </CSSTransition>
    </>
  );
};

export default TooltipBase;
