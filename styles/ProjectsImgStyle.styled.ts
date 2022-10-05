import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const ProjectsImgStyle = styled.div<IStyle>`
  margin: 0 auto;
  flex-basis: 100%;

  div {
    border-radius: 10px;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    overflow: hidden;
    padding-top: 50%;
    width: 100%;
    align-self: center;

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

  @media (min-width: 768px) {
    align-items: center;
    margin: 0;
    align-self: center;
    flex-basis: 45%;
  }

  @media (min-width: 1240px) {
    flex-basis: 40%;
  }
`;
