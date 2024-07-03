import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <div>This is about page</div>
      <Link to="/">
        <button className="btn btn__primary">Go to home</button>
      </Link>
    </div>
  );
};

export default AboutPage;
