import { createGlobalStyle } from "styled-components";
import { CSSTransitionStyles, ResetStyles, SetupStyles } from "./common";

export const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
  ${SetupStyles}
  ${CSSTransitionStyles}
`;
