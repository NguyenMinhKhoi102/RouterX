import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>This is not found Page</div>
      <Link>
        <button className="btn btn__primary">Go to home</button>
      </Link>
    </>
  );
};

export default NotFound;
