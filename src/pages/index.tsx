import type { NextPage } from "next";
import { createClient } from "contentful";
import { IHomePageProps } from "../ts-types/componentTypes";
import Head from "next/head";
import Home from "../components/__Pages__/Home/Home";

const id = process.env.CONTENTFUL_SPACE_ID,
  token = process.env.CONTENTFUL_TOKEN;

export async function getStaticProps() {
  if (!id || !token) return { props: { projects: [] } };
  const clients = createClient({
    space: id,
    accessToken: token,
  });

  const res = await Promise.all([
    clients.getEntries({
      content_type: "projects",
    }),
    await clients.getEntries({
      content_type: "about",
    }),
  ]);

  return {
    props: {
      projects: res[0].items,
      about: res[1].items,
      revalidate: 60,
    },
  };
}

const HomePage: NextPage<IHomePageProps> = ({ projects, about, el, setEl }) => (
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
    <Home projects={projects} about={about} el={el} setEl={setEl} />
  </>
);

export default HomePage;
