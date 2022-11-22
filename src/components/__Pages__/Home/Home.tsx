import { Container } from "../../others/Container.styled";
import { MainBodyStyle } from "./Home.styled";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import ProjectsLayout from "./ProjectsLayout/ProjectsLayout";
import Workflow from "./WorkFlow/WorkFlow";
import Contact from "./Contact/Contact";
import { IHomePageProps } from "../../../ts-types/componentTypes";
import { Context } from "../../../../src/assets/utils/Context";
import { useContext, useEffect } from "react";

const Home: React.FC<IHomePageProps> = props => {
  const { darkmode, setToggle } = useContext(Context);
  const { projects, about, el, setEl } = props;

  useEffect(() => {
    setTimeout(() => {
      if (el.length) {
        const element = document.getElementById(el);
        element?.scrollIntoView(true);
      }
    }, 1000);
    return () => setEl("");
  }, [el, setEl]);

  const keyProjects = projects.filter(p => {
    switch (p.fields.title) {
      case "Formpl":
        return true;
      case "Github Trends Page":
        return true;
      case "Covid Statistics":
        return true;
      default:
        return false;
    }
  });

  return (
    <>
      <div>
        <MainBodyStyle
          className="main"
          darkMode={darkmode}
          onTouchStart={() => setToggle(false)}
        >
          <Container>
            <Hero />
          </Container>
          <About about={about} />
          <Skills />
          <ProjectsLayout projects={keyProjects} />
          <Workflow />
          <Contact />
        </MainBodyStyle>
      </div>
    </>
  );
};

export default Home;
