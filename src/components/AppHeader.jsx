import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  margin: 30px 60px 0;
`;

const LogoStyle = styled.div`
  height: 40px;
  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

const NavStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0;
`;
const NavItemStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  vertical-align: center;
`;

const AppointmentTextStyle = styled.i`
  font-size: 16px;
  margin-left: 10px;
`;

const AppHeader = () => {
  return (
    <HeaderStyle>
      <LogoStyle>
        <img src="/src/assets/logo/logo.svg" alt="" />
      </LogoStyle>
      <NavStyle>
        <NavItemStyle className="text-navigation text-900">
          home<i className="fa fa-angle-down" style={{ fontSize: "10px" }}></i>
        </NavItemStyle>
        <li>
          About Us <i className="fa fa-angle-down"></i>
        </li>
      </NavStyle>
      <button className="btn">
        Get An Appointment{" "}
        <AppointmentTextStyle className="fa fa-arrow-right"></AppointmentTextStyle>
      </button>
    </HeaderStyle>
  );
};

export default AppHeader;
