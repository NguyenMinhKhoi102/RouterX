import { css } from "styled-components";

export const CSSTransitionStyles = () => {
  return css`
    //zoom
    .zoom {
      &-enter .content {
        opacity: 0;
        transform: scale(0.5);
      }
      &-enter-active .content {
        opacity: 1;
        transform: scale(1);
        transition: opacity 250ms, transform 250ms;
      }
      &-exit .content {
        opacity: 1;
      }
      &-exit-active .content {
        opacity: 0;
        transform: scale(0.5);
        transition: opacity 250ms, transform 250ms;
      }
    }
    .fade {
      &-enter .content {
        opacity: 0;
      }
      &-enter-active .content {
        opacity: 1;
        transition: opacity 250ms, transform 250ms;
      }
      &-exit .content {
        opacity: 1;
      }
      &-exit-active .content {
        opacity: 0;
        transition: opacity 250ms, transform 250ms;
      }
    }
  `;
};
