import styled from "styled-components";
import { HeroStyle } from "./Hero.styled";
import { IProjectsStyle } from "../ts-types/styleTypes";

export const ProjectsStyle = styled(HeroStyle)<IProjectsStyle>`
  position: relative;
  width: 100%;
 margin-top: -20px;
margin-bottom: 50px;


  section {

    padding: 0 15px 0;
    margin-top: 0;

    @media (min-width: 768px) {
      padding-top: 10px;
    }
    @media (min-width: 1024px) {
      padding-top: 50px;
    }
  }

  div {
    aspect-ratio: auto;

    h3 {
      text-align: center;
      margin: 0 auto 40px;
      }
    }
  }

  .title {
    padding: 0;
    display: flex;
    align-self: start;
    align-items: start;
    flex-direction: column;
    margin-top: 0;

    @media (min-width: 768px) {
      padding: 0 15px;
    }
    
    @media (min-width: 1024px) {
      margin-top: 0;
      padding: 0 0 0 50px;
    }

    @media (min-width: 1340px) {
      margin-top: 0;
      padding: 0 150px 0 50px;
    }

    h4 {
      align-self: start;
      letter-spacing: 0;
      margin-top: 70px;

      @media (min-width: 768px) {
        margin-top: 0;
      }
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

  .reverse {
    @media (min-width: 768px) {
      flex-direction: row-reverse;

      div.title {
        padding: 0 0px 0 30px;
        }
  
        div.img_container {
           margin-left: -15px;
        }
    }

    @media (min-width: 1024px){
      div.img_container {
        margin-left: 20px;
     }
    }

    @media (min-width: 1240px){

      div.title {
        padding: 0 0px 0 150px;
        }
  
        div.img_container {
          margin-left: -100px;
        }
    }
  }

  @media (min-width: 576px){
    margin-top: -30px;
  }

  @media (min-width: 768px){
    margin-top: -50px;
  }

  @media (min-width: 1024px){
    margin-top: -70px;
  }

  @media (min-width: 1280px){
    margin-top: -100px;
  }
`;
