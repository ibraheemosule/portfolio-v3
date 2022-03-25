import type { NextPage } from "next";
import { Container } from "../styles/Container.styled";
import { MainBodyStyle } from "../styles/MainBody.styled";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsLayout from "../components/ProjectsLayout";
import Workflow from "../components/Workflow";
import Contact from "../components/Contact";
import { createClient } from "contentful";
import { IIndexPageProps } from "../ts-types/componentTypes";
import { Context } from "../assets/Context";
import { useContext, useEffect } from "react";
import Head from "next/head";

const id = process.env.CONTENTFUL_SPACE_ID,
  token = process.env.CONTENTFUL_TOKEN;

export async function getStaticProps() {
  if (!id || !token) return { props: { projects: {} } };
  const clients = createClient({
    space: id,
    accessToken: token,
  });

  const res = await clients.getEntries({
    content_type: "projects",
  });

  const about = await clients.getEntries({
    content_type: "about",
  });

  return {
    props: {
      projects: res.items,
      about: about.items,
      revalidate: 60,
    },
  };
}

const MainBody: NextPage<IIndexPageProps> = props => {
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
      <Head>
        <title>Ibrahim Sule Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <meta
          name="keywords"
          content="frontend, front-end, Front-End, developer, ibrahim, ibraheem, ibraheemsulay, ibraheem sule, ibrahim sule, nextjs, next, vue, nuxt"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1647149179/portfolio-v3_tflfex.png"
        />

        <meta name="twitter:site" content="Ibrahim Sule" />

        <meta name="twitter:title" content="Ibrahim Sule" />
        <meta
          name="twitter:description"
          content="Developer portfolio of Ibrahim Sule"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1647149179/portfolio-v3_tflfex.png"
        />
        <meta property="og:site_name" content="Ibrahim Sule" />

        <meta property="og:title" content="Ibrahim Sule" />

        <meta property="og:url" content="https://ibraheemsulay.vercel.app" />

        <meta
          property="og:description"
          content="Developer portfolio of Ibrahim Sule"
        />
      </Head>
      <div>
        <MainBodyStyle
          className="main"
          darkMode={darkmode}
          onTouchStart={() => setToggle(false)}
        >
          <Container>
            <Hero />
          </Container>
          <div id="PersonAbout">
            <About about={about} />
          </div>

          <div>
            <Skills />
          </div>
          <div className="project-layout">
            <ProjectsLayout projects={keyProjects} />
          </div>
          <div className="workflow">
            <Workflow />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </MainBodyStyle>
      </div>
    </>
  );
};

export default MainBody;
