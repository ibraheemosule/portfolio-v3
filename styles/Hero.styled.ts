import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const HeroStyle = styled.section<IStyle>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 100px 0;
  align-items: center;
  line-height: 1.3;
  letter-spacing: 2px;

  div.title {
    flex-basis: 100%;
    order: 2;
    margin-top: 50px;
    align-self: center;
    position: relative;
  }

  .description {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s ease-in;
  }

  .hero_title,
  .description {
    visibility: hidden;
    position: relative;
  }

  @keyframes drop {
    from {
      visibility: visible;
      right: 150%;
    }
    to {
      visibility: visible;
      right: 0;
    }
  }

  .hero_title {
    animation-name: drop;
    animation-duration: 1s;
    animation-delay: 0.75s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .description {
    animation-name: drop;
    animation-duration: 1s;
    animation-delay: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @media (min-width: 576px) {
    align-items: baseline;

    div.title {
      flex-basis: 60%;
      padding-right: 5px;
      order: 0;
    }
  }

  @media (min-width: 768px) {
    align-items: baseline;

    div.title {
      flex-basis: 50%;
      padding-right: 20px;
      order: 0;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }

  @media (min-width: 1340px) {
    align-items: center;

    div.title {
      align-items: center;
      margin-top: 0;
    }
  }
`;
