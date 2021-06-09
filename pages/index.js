import Head from "next/head";
import Image from "next/image";
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

      {/* Header Content */}
      <Header />

      {/* Navigation Content */}

      {/* Result Content */}
    </div>
  );
}
