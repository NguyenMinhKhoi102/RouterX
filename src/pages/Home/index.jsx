import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardList from "./CardList";

const HomeStyle = styled.div`
  margin-top: 40px;
`;

const HeroStyle = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background-image: url("/src/assets/images/home/home-hero-bg.png");
`;

const HomePage = () => {
  return (
    <HomeStyle>
      <HeroStyle className="bg-900">
        <div className="text-display-d1 text-white text-center">
          Journey with Confidence
          <div>
            <span className="text-home-p">Migrate</span> with Us
          </div>
        </div>
        <div
          className="text-body-m text-white text-center"
          style={{ maxWidth: "520px", width: "100%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rcus nunc. Duis egestas ac ante sed tincidunt.
        </div>
        <Link>
          <button className="btn">
            Learn more
            <i className="fa fa-arrow-right" style={{ marginLeft: "10px" }}></i>
          </button>
        </Link>
      </HeroStyle>
      <CardList />
    </HomeStyle>
  );
};

export default HomePage;
