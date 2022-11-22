import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const BlobReverseStyle = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1440 320",
})<IStyle>`
  margin-top: -20px;

  @media (min-width: 576px) {
    margin-top: -30px;
  }

  @media (min-width: 768px) {
    margin-top: -45px;
  }

  @media (min-width: 900px) {
    margin-top: -50px;
  }

  @media (min-width: 1024px) {
    margin-top: -60px;
  }

  @media (min-width: 1240px) {
    margin-top: -60px;
  }
`;
