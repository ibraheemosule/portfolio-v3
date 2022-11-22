import { ProjectsStyle } from "./ProjectsStyle.styled";
import { Button } from "../../others/Button.styled";
import { IAllProjectsProps } from "../../../ts-types/componentTypes";
import Image from "next/image";
import { Paginate } from "../../../ts-types/dataTypes";
import { useState, useEffect } from "react";
import Pagination from "../../others/Pagination/Pagination";
import { useContext } from "react";
import { Context } from "../../../assets/utils/Context";

const paginateFunction = ({ arr, pageSize, pageNumber }: Paginate) => {
  const start = pageSize * (pageNumber - 1);
  const end = pageSize * pageNumber;
  return {
    *[Symbol.iterator]() {
      for (let i = start; i < arr.length && i < end; i++) {
        yield arr[i];
      }
    },
  };
};

const AllProjects: React.FC<IAllProjectsProps> = ({ projects }) => {
  const { darkmode, setToggle } = useContext(Context);

  const [number, setNumber] = useState(1);

  const numOfPages = Math.ceil(projects.length / 4);

  const [projectsToShow, setProjectsToShow] = useState<any>([]);

  useEffect(() => {
    const pag = paginateFunction({
      arr: [...projects],
      pageSize: 4,
      pageNumber: number,
    });
    setProjectsToShow([...pag]);
  }, [projects, number]);

  return (
    <ProjectsStyle darkMode={darkmode} onTouchStart={() => setToggle(false)}>
      <div className="container">
        <div className="title">
          <h3>All Projects</h3>
        </div>

        {projectsToShow.map((p: any, i: number) => (
          <div className="card" key={p.sys.id}>
            <Image src={p.fields.photo} alt="project webpage" layout="fill" />
            <div className="details">
              <h4>{p.fields.title}</h4>
              <p>
                <strong>Summary:</strong> <small>{p.fields.summary}</small>
              </p>
              <p>
                <strong>Tools:</strong>{" "}
                <small>{p.fields.tool.join(", ")}</small>
              </p>
              <div>
                <a href={p.fields.link} target="_blank" rel="noreferrer">
                  <Button className="btn">View Project</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        number={number}
        numOfPages={numOfPages}
        setNumber={setNumber}
      />
    </ProjectsStyle>
  );
};

export default AllProjects;
