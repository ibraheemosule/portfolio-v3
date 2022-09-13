import styled from "styled-components";
import { HeroImgStyle } from "./HeroImgStyle.styled";
import { IStyle } from "../ts-types/styleTypes";

export const AboutImgStyle = styled(HeroImgStyle)<IStyle>`
  padding-top: 50px;
  padding-bottom: 0;
  border-radius: 0;
  overflow: initial;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  div {
    border-radius: 52% 87% 30% 75% / 49% 60% 31% 56%;
    box-shadow: 3px 4.1px 7.3px rgba(0, 0, 0, 0.045),
      24px 33px 58px rgba(0, 0, 0, 0.09);
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      object-fit: cover;
      object-position: 0% 0%;
      filter: grayscale(100%);
    }
  }
`;
