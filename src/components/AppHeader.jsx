import React, { useState } from "react";
import styled from "styled-components";
import { Nav_List } from "@/constants";
import { Link } from "react-router-dom";
import ModalBase from "./Modal";

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
  const [show, setShow] = useState(false);
  return (
    <>
      <HeaderStyle>
        <LogoStyle>
          <img src="/src/assets/logo/logo-header.svg" alt="" />
        </LogoStyle>
        <NavStyle>
          {Nav_List.map((navItem) => (
            <Link key={navItem.id} to={navItem.path}>
              <NavItemStyle className="text-navigation text-900">
                {navItem.name}
                <i
                  className="fa fa-angle-down"
                  style={{ fontSize: "10px" }}
                ></i>
              </NavItemStyle>
            </Link>
          ))}
        </NavStyle>
        <button className="btn" onClick={() => setShow(true)}>
          Get An Appointment
          <AppointmentTextStyle className="fa fa-arrow-right"></AppointmentTextStyle>
        </button>
      </HeaderStyle>
      <ModalBase
        open={show}
        onClose={() => setShow(false)}
        wrapperStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        bodyStyle={{
          background: "white",
          padding: "10px",
          width: "500px",
          height: "500px",
        }}
      >
        Hello word
      </ModalBase>
    </>
  );
};

export default AppHeader;
