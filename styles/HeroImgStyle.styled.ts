import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const HeroImgStyle = styled.div<IStyle>`
  flex-basis: 80%;
  margin: auto;
  aspect-ratio: 1/1;
  margin: auto;
  border-radius: 50%;

  div {
    padding-top: 100%;
    border-radius: 100%;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    width: 100%;
    overflow: hidden;

    span {
      background: ${({ theme, darkMode }) =>
        darkMode ? theme.theme2.bgCol : theme.theme1.bgCol} !important;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      object-fit: contain;
      background: white;
    }
  }
  .img-wrapper-animate {
    visibility: hidden;
    animation-name: rotate;
    animation-duration: 1s;
    animation-delay: 2.25s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    from {
      visibility: visible;
      left: 150%;
      transform: rotateZ(480deg);
    }
    to {
      visibility: visible;
      left: 0;
      transform: rotateZ(0deg);
    }
  }

  @media (min-width: 576px) {
    flex-basis: 40%;
    padding-top: 3rem;
    aspect-ratio: 7/6;
    border-radius: none;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 30px;
  }

  @media (min-width: 1240px) {
    flex-basis: 40%;
  }

  @media (min-width: 1440px) {
    padding: 70px;
  }
`;
