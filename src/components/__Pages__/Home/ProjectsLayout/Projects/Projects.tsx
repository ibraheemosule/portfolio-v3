import { ProjectsStyle } from "../ProjectsStyle.styled";
import { ProjectsImgStyle } from "./ProjectsImgStyle.styled";
import { Button } from "../../../../others/Button.styled";
import { IProjectsProps } from "../../../../../ts-types/componentTypes";
import Image from "next/image";

const Projects: React.FC<IProjectsProps> = props => {
  const { title, image, summary, tools, index, link } = props;

  return (
    <>
      <ProjectsStyle i={index} className={index === 1 ? "reverse" : ""}>
        <ProjectsImgStyle>
          <div className="img_container">
            <Image src={image} alt="project landing page view" layout="fill" />
          </div>
        </ProjectsImgStyle>
        <div className="title">
          <h4>{title}</h4>
          <p>
            <span>Summary: </span> {summary}
          </p>
          <p>
            <span>Tools: </span> {tools}
          </p>
          <Button>
            <a href={link} target="_blank" rel="noreferrer">
              VIEW PROJECT
            </a>
          </Button>
        </div>
      </ProjectsStyle>
    </>
  );
};

export default Projects;
