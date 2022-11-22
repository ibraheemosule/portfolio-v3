import { AllProjectsStyle } from "../styles/AllProjectsStyle.styled";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import type { NextPage } from "next";
import { IAllProjectsProps } from "../ts-types/componentTypes";
import Image from "next/image";
import { createClient } from "contentful";
import { Paginate } from "../ts-types/dataTypes";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import { Context } from "../assets/utils/Context";
import Head from "next/head";

const id = process.env.CONTENTFUL_SPACE_ID,
  token = process.env.CONTENTFUL_TOKEN;

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

export async function getStaticProps() {
  if (!id || !token) return { props: { projects: {} } };
  const clients = createClient({
    space: id,
    accessToken: token,
  });

  const res = await clients.getEntries({
    content_type: "projects",
  });
  return {
    props: {
      projects: res.items.reverse(),
      revalidate: 60,
    },
  };
}

const AllProjects: NextPage<IAllProjectsProps> = ({ projects }) => {
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
    <>
      <Head>
        <title>Projects | Ibrahim Sule</title>
        <meta
          name="keywords"
          content="frontend, front-end, Front-End, developer, ibrahim, ibraheem, ibraheemsulay, ibraheem sule, ibrahim sule, nextjs, next, vue, nuxt"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Developer Projects of Ibrahim Sule" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1647149179/portfolio-v3_tflfex.png"
        />

        <meta name="twitter:site" content="Projects | Ibrahim Sule" />

        <meta name="twitter:title" content="Projects | Ibrahim Sule" />
        <meta
          name="twitter:description"
          content="Developer Projects of Ibrahim Sule"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1647149179/portfolio-v3_tflfex.png"
        />
        <meta property="og:site_name" content="Ibrahim Sule" />

        <meta property="og:title" content="Projects | Ibrahim Sule" />

        <meta
          property="og:url"
          content="https://ibraheemsulay.vercel.app/AllProjects"
        />

        <meta
          property="og:description"
          content="Developer Projects of Ibrahim Sule"
        />
      </Head>
      <AllProjectsStyle
        darkMode={darkmode}
        onTouchStart={() => setToggle(false)}
      >
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
      </AllProjectsStyle>
    </>
  );
};

export default AllProjects;
