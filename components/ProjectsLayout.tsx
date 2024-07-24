import Projects from "./Projects";
import { ProjectsStyle } from "../styles/ProjectsStyle.styled";
import { Row } from "../styles/Row.styled";
import { IAllProjectsProps } from "../ts-types/componentTypes";
import Link from "next/link";

const ProjectsLayout: React.FC<IAllProjectsProps> = ({ projects }) => {
  return (
    <ProjectsStyle className="animate">
      <Row>
        <h3>Projects</h3>
      </Row>

      <div>
        {projects.map((p, i) => (
          <Projects
            key={p.sys.id}
            title={p.fields.title}
            image={p.fields.photo}
            summary={p.fields.summary}
            tools={p.fields.tool.join(", ")}
            link={p.fields.link}
            index={i}
          />
        ))}
        <div className="view-more">
          <Link href="/AllProjects">View more projects</Link>
        </div>
      </div>
    </ProjectsStyle>
  );
};

export default ProjectsLayout;
