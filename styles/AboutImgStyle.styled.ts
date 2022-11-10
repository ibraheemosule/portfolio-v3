import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const AboutImgStyle = styled.div<IStyle>`
  flex-basis: 80%;
  margin: auto;
  aspect-ratio: 1/1;
  margin: auto;
  border-radius: 50%;
  padding-top: 50px;

  div {
    padding-top: 100%;
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

  @media (min-width: 576px) {
    flex-basis: 70%;
    aspect-ratio: 7/6;
    border-radius: none;
    overflow: initial;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 1rem;
  }

  @media (min-width: 830px) {
    flex-basis: 50%;
    padding: 1rem 1rem 0 4rem;
  }

  @media (min-width: 900px) {
    flex-basis: 42%;
  }

  @media (min-width: 992px) {
    flex-basis: 40%;
    padding: 2rem 1rem 0 5rem;
  }

  @media (min-width: 1024px) {
    flex-basis: 50%;
    padding: 1.5rem 1rem 0 5rem;
  }

  @media (min-width: 1240px) {
    //margin-top: -5rem;
    padding: 6.25rem 1.75rem 6.25rem 11.375rem;
  }

  @media (min-width: 1375px) {
    padding: 8.25rem 1.75rem 8.25rem 14.375rem;
  }
`;
