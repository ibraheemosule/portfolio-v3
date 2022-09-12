import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const HeroImgStyle = styled.div<IStyle>`
  flex-basis: 80%;
  aspect-ratio: 7/6;
  margin: auto;
  @media (min-width: 576px) {
    flex-basis: 70%;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 30px;
  }

  @media (min-width: 1340px) {
    padding: 150px;
  }

  div {
    padding-top: 100%;
    border-radius: 100%;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    width: 100%;
    overflow: hidden;

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
`;
