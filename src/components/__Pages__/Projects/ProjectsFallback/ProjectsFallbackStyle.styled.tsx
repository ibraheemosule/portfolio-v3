import styled from "styled-components";
import { ProjectsStyle } from "../ProjectsStyle.styled";

export const ProjectsFallBackStyle = styled(ProjectsStyle)`
  min-width: 75vw;
  min-height: 100vh;

  @keyframes slide {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  .animating {
    display: block;
    position: relative;
    width: 70px;
    height: 100%;
    opacity: 0.6;
    animation-name: slide;
    animation-duration: 0.75s;
    animation-iteration-count: infinite;

    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.1)
    );
  }

  @media (min-width: 576px) {
    min-width: 100vw;
  }
`;
