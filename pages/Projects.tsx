import type { NextPage } from "next";
import { IAllProjectsProps } from "../ts-types/componentTypes";
import AllProjects from "../components/__Pages__/Projects/Projects";
import { createClient } from "contentful";
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
  return {
    props: {
      projects: res.items.reverse(),
      revalidate: 60,
    },
  };
}

const ProjectsPage: NextPage<IAllProjectsProps> = ({ projects }) => (
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
    <AllProjects projects={projects} />
  </>
);

export default ProjectsPage;
