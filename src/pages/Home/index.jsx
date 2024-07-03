import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div>
      <div>This is home page</div>
      <Link to="/about">
        <Button type="primary">Go to about</Button>
      </Link>
    </div>
  );
};

export default HomePage;
