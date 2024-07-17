import React, { forwardRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const createPortalWrapper = () => {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
};

const portalWrapperElement = createPortalWrapper();

const OverlayStyle = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BodyStyle = styled.div`
  position: relative;
  z-index: 10;
`;

const Portal = forwardRef(
  (
    {
      overlay = false,
      wrapperStyle = {},
      bodyStyle = {},
      onClose = () => {},
      children,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      document.body.appendChild(portalWrapperElement);
    }, []);
    const renderContent = (
      <div ref={ref} style={wrapperStyle} {...props}>
        {overlay && <OverlayStyle onClick={onClose} />}
        <BodyStyle className="content" style={bodyStyle}>
          {children}
        </BodyStyle>
      </div>
    );
    return createPortal(renderContent, portalWrapperElement);
  },
  []
);

export default Portal;
