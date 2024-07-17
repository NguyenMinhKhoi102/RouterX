import React from "react";
import styled from "styled-components";

const CardListStyle = styled.div`
  padding-top: 30px;
  padding-inline: 60px;
  display: flex;
  gap: 30px;
`;

const CardStyle = styled.div`
  padding: 50px 40px 70px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardIconStyle = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 100rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardList = () => {
  const data = [
    {
      icon: "/src/assets/icons/icon-world-2.svg",
      title: "Food and Wine Tours",
      desc: "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac",
    },
    {
      icon: "/src/assets/icons/icon-visa.svg",
      title: "Travel Opportunities",
      desc: "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    },
    {
      icon: "/src/assets/icons/icon-ticket.svg",
      title: "Solo Travel Planning",
      desc: "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac",
    },
  ];
  return (
    <CardListStyle>
      {data.map((value, index) => (
        <CardStyle key={index}>
          <CardIconStyle className="bg-home-p">
            <img src={value.icon} alt="" />
          </CardIconStyle>
          <div className="text-h3 text-900">{value.title}</div>
          <div className="text-body-m text-800">{value.desc}</div>
        </CardStyle>
      ))}
    </CardListStyle>
  );
};

export default CardList;
