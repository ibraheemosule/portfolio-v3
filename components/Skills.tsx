import SkillsStyle from "../styles/SkillsStyle.styled";
import { Row } from "../styles/Row.styled";
import CssIcon from "../assets/svgs/CssIcon";
import HtmlIcon from "../assets/svgs/HtmlIcon";
import SassIcon from "../assets/svgs/SassIcon";
import TypescriptIcon from "../assets/svgs/TypescriptIcon";
import TailwindIcon from "../assets/svgs/TailwindIcon";
import ReactIcon from "../assets/svgs/ReactIcon";
import NuxtIcon from "../assets/svgs/NuxtIcon";
import BootstrapIcon from "../assets/svgs/BootstrapIcon";
import VueIcon from "../assets/svgs/VueIcon";
import JavascriptIcon from "../assets/svgs/JavascriptIcon";
import GitIcon from "../assets/svgs/GitIcon";
import FirebaseIcon from "../assets/svgs/FirebaseIcon";
import GsapIcon from "../assets/svgs/GsapIcon";
import CypressIcon from "../assets/svgs/CypressIcon";
import JestIcon from "../assets/svgs/JestIcon";
import NextjsIcon from "../assets/svgs/NextjsIcon";
import { ISkillsProps } from "../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../assets/Context";
import BlobReverse from "../assets/svgs/BlobReverse";

const Skills: React.FC<ISkillsProps> = () => {
  const { darkmode } = useContext(Context);

  return (
    <>
      <SkillsStyle darkMode={darkmode}>
        <h3 id="Skills">My Skills</h3>

        <Row>
          <div className="skills">
            <div className="icon">
              <CssIcon />
              <h5>CSS</h5>
            </div>
            <div className="icon">
              <HtmlIcon />
              <h5>HTML</h5>
            </div>
            <div className="icon">
              <SassIcon />
              <h5>SASS</h5>
            </div>
            <div className="icon">
              <TypescriptIcon />
              <h5>TYPESCRIPT</h5>
            </div>
            <div className="icon">
              <TailwindIcon />
              <h5>TAILWIND</h5>
            </div>
            <div className="icon">
              <ReactIcon />
              <h5>REACT</h5>
            </div>
            <div className="icon">
              <NuxtIcon />
              <h5>NUXT</h5>
            </div>
            <div className="icon">
              <BootstrapIcon />
              <h5>BOOTSTRAP</h5>
            </div>
            <div className="icon">
              <VueIcon />
              <h5>VUE</h5>
            </div>
            <div className="icon">
              <JavascriptIcon />
              <h5>JAVASCRIPT</h5>
            </div>
            <div className="icon">
              <GitIcon />
              <h5>GIT</h5>
            </div>
            <div className="icon">
              <FirebaseIcon />
              <h5>FIREBASE</h5>
            </div>
            <div className="icon">
              <GsapIcon />
              <h5>GSAP ANIMATION</h5>
            </div>
            <div className="icon">
              <CypressIcon />
              <h5>CYPRESS</h5>
            </div>
            <div className="icon">
              <JestIcon />
              <h5>JEST</h5>
            </div>
            <div className="icon">
              <NextjsIcon />
              <h5>NEXT</h5>
            </div>
          </div>
        </Row>
      </SkillsStyle>
      <BlobReverse />
    </>
  );
};

export default Skills;
