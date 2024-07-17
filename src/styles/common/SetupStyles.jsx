import { css } from "styled-components";

export const SetupStyles = () => {
  return css`
    @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

    body {
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      font-style: normal;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: currentColor;
    }
  `;
};
