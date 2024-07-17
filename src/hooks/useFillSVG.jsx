import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const useFillSVG = (color) => {
  const objectRef = useRef();

  useEffect(() => {
    const objectNode = objectRef.current;
    console.log(objectNode);
    objectNode.addEventListener("load", () => {
      const svgDoc = objectNode.contentDocument;
      const svgNode = svgDoc.querySelector("svg");
      svgNode.style.color = color;
    });
  }, []);
  return objectRef;
};
