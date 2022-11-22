import { Container } from "../../../others/Container.styled";
import { ProjectsFallBackStyle } from "./ProjectsFallbackStyle.styled";

function AllProjectsFallBack() {
  return (
    <ProjectsFallBackStyle>
      <Container className="container">
        <div className="title">
          <h3>All Projects</h3>
        </div>
        {[...new Array(4)].map((p: any, i: number) => (
          <div className="card" key={i}>
            <span className="animating"></span>
          </div>
        ))}
      </Container>
    </ProjectsFallBackStyle>
  );
}

export default AllProjectsFallBack;
