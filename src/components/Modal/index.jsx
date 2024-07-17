import React, { useRef } from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({
  open,
  onClose,
  children,
  wrapperStyle,
  bodyStyle,
  ...props
}) => {
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        in={open}
        timeout={250}
        classNames="zoom"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <Portal
          overlay
          ref={nodeRef}
          open={open}
          onClose={onClose}
          wrapperStyle={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...wrapperStyle,
          }}
          bodyStyle={{
            backgroundColor: "white",
            borderRadius: "4px",
            ...bodyStyle,
          }}
          {...props}
        >
          {children}
        </Portal>
      </CSSTransition>
    </>
  );
};

export default ModalBase;
