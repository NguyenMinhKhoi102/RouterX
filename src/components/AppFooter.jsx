import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFillSVG } from "@/hooks";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const MapStyle = styled.div`
  position: absolute;
  width: calc(100vw - 250px);
  height: 900px;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const FooterTopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 30px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const QuestionStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-block: 18px;
`;

const QuestionIconStyle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterMiddleStyle = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const DescStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`;

const LogoStyle = styled.div`
  height: 40px;
  margin-bottom: 10px;
  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`;

const SocialNetWorkStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 16px;
  margin: 0;
`;

const GroupContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const ListContentStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SubscribeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 300px;
`;

const FormStyle = styled.form`
  position: relative;
`;
const InputStyle = styled.input`
  width: 100%;
  border-radius: 100rem;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 14px 70px 14px 25px;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    left: 30px;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0 0 2px #000;
  }
`;

const LabelStyle = styled.label`
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  pointer-events: none;
`;

const ButtonSubmitStyle = styled.button`
  width: 58px;
  height: 58px;
  border-radius: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    opacity: 0.8;
  }
`;

const FooterBottomStyle = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-block: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavStyle = styled.ul`
  display: flex;
  gap: 35px;
  margin: 0;
`;

const AppFooter = () => {
  const svgWhiteRef = useFillSVG("#fff");
  console.log(svgWhiteRef);
  return (
    <FooterStyle className="bg-900 text-white">
      <MapStyle>
        <img src="/src/assets/images/footer/footer-bg.png" alt="" />
      </MapStyle>
      <FooterTopStyle>
        <QuestionStyle>
          <QuestionIconStyle className="bg-home-p text-white">
            <object
              ref={svgWhiteRef}
              data="/src/assets/icons/icon-currency.svg"
              type="image/svg+xml"
            ></object>
          </QuestionIconStyle>
          <div className="text-h2">
            Need Any Support For <br /> Tour And Visa?
          </div>
        </QuestionStyle>
        <div className="br-200" style={{ height: "100px" }}></div>
        <QuestionStyle>
          <QuestionIconStyle className="bg-home-p text-white">
            <img src="/src/assets/icons/icon-world.svg" alt="" />
          </QuestionIconStyle>
          <div className="text-h2">
            Are You Ready For Get
            <br /> Started Travelling?
          </div>
        </QuestionStyle>
      </FooterTopStyle>
      <div className="bb-200"></div>
      <FooterMiddleStyle>
        <DescStyle>
          <LogoStyle>
            <img src="/src/assets/logo/logo-footer.svg" alt="" />
          </LogoStyle>
          <div className="text-body-m">
            Corporate business typically refers to large-scale mansola it
            enterprises or organizat
          </div>
          <SocialNetWorkStyle>
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <object
                ref={svgWhiteRef}
                data="/src/assets/icons/icon-x.svg"
                type="image/svg+xml"
              />
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </SocialNetWorkStyle>
        </DescStyle>
        <GroupContentStyle>
          <div className="text-h3">Services</div>
          <ListContentStyle>
            {[
              "Mistakes To Avoid",
              "Your Startup",
              "Knew About Fonts",
              "Knew About Fonts",
            ].map((value, key) => (
              <Link key={key}>
                <ContentStyle className="text-body-m text-white">
                  <i className="fa-solid fa-check text-home-p"></i>
                  {value}
                </ContentStyle>
              </Link>
            ))}
          </ListContentStyle>
        </GroupContentStyle>
        <GroupContentStyle>
          <div className="text-h3">Useful Link</div>
          <ListContentStyle>
            {[
              "Latest News",
              "Careers",
              "General Inquiries",
              "Case Studies",
            ].map((value, key) => (
              <Link key={key}>
                <ContentStyle className="text-body-m text-white">
                  <i className="fa-solid fa-angle-right text-home-p"></i>
                  {value}
                </ContentStyle>
              </Link>
            ))}
          </ListContentStyle>
        </GroupContentStyle>
        <SubscribeStyle>
          <div className="text-h3">Subscribe Our Newsletter</div>
          <div className="text-body-m">
            Corporate business typically refers to large-scale mansola it.
          </div>
          <FormStyle action="">
            <InputStyle
              type="text"
              className="bg-700 text-body-m text-white"
              placeholder=" "
            />
            <LabelStyle>Enter Email</LabelStyle>
            <ButtonSubmitStyle type="submit" className="bg-home-p">
              <i className="fa-solid fa-paper-plane"></i>
            </ButtonSubmitStyle>
          </FormStyle>
        </SubscribeStyle>
      </FooterMiddleStyle>
      <div className="bb-200"></div>
      <FooterBottomStyle>
        <div className="text-body-m">
          &copy; Yoursitename 2024 | All Rights Reserved
        </div>
        <NavStyle>
          {["Trams & Condition", "Privacy Policy", "Contact Us"].map(
            (value, key) => (
              <Link key={key}>
                <li className="text-body-m text-white">{value}</li>
              </Link>
            )
          )}
        </NavStyle>
      </FooterBottomStyle>
    </FooterStyle>
  );
};

export default AppFooter;
