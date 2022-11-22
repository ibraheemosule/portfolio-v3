import styled from "styled-components";
import { IProjectsStyle } from "../../../../ts-types/styleTypes";

export const ProjectsStyle = styled.section<IProjectsStyle>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1.3;
  letter-spacing: 2px;

  h3 {
    text-align: center;
    margin: 0 auto;
  }

  section {
    padding: 0 15px 0;
    margin-top: 70px;
  }

  .title {
    flex-basis: 100%;
    margin-top: 20px;
    display: flex;
    align-self: start;
    align-items: start;
    flex-direction: column;

    h4 {
      align-self: start;
      letter-spacing: 0;
    }

    p {
      font-weight: 400;
      margin-top: 20px;
      width: 100%;

      span {
        font-weight: bolder;
      }

      a {
        text-decoration: none;
        color: hsla(233, 97%, 27%, 0.692);
      }
    }

    button {
      margin-top: 20px;

      a {
        display: block;
        text-decoration: none;
        color: inherit;
      }
    }
  }

  @media (min-width: 576px) {
    margin-top: -30px;
    padding: 0 3rem;
    align-items: baseline;
  }

  @media (min-width: 768px) {
    margin-top: -50px;
    padding: 0;
    gap: 10%;
    justify-content: center;

    .title {
      flex-basis: 45%;
      margin-top: 0;
    }

    .reverse {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 1024px) {
    margin-top: -70px;
    margin-bottom: 0;
  }

  @media (min-width: 1240px) {
    .title {
      flex-basis: 40%;
    }
  }
`;
