import Head from "next/head";
import Categories from "../components/Categories";
import Feed from "../components/Feed";
import Header from "../components/Header";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta
          name="description"
          content="Hulu.com clone built with Next.js and Tailwind CSS"
        />
      </Head>

      <Header />

      <Categories />

      <Feed results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
