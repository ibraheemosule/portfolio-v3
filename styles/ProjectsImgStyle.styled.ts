import styled from "styled-components";
import { HeroImgStyle } from "./HeroImgStyle.styled";
import { IStyle } from "../ts-types/styleTypes";

export const ProjectsImgStyle = styled(HeroImgStyle)<IStyle>`
  display: flex;
  align-items: center;
  padding-bottom: 0;
  margin-top: 0;
  flex-basis: 100%;
  margin-bottom: -50px;
  border-radius: 0;
  overflow: initial;

  @media (min-width: 768px) {
    align-items: start;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 0;
    flex-basis: 50%;
  }

  div {
    border-radius: 10px;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    overflow: hidden;
    padding-top: 50%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      object-fit: cover;
      object-position: 0% 0%;
      filter: grayscale(0);
    }
  }
`;
