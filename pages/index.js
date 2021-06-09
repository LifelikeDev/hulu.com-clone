import Head from "next/head";
import Categories from "../components/Categories";
import Header from "../components/Header";

export default function Home() {
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

      {/* Result Content */}
    </div>
  );
}
