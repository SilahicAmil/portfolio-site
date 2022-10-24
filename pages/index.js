import Head from "next/head";
import MainHead from "../components/MainHead/MainHead";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>amil.dev - Front End Developer </title>
        <meta
          key="title"
          content="Amil Silahic. Front End Developer Main Page"
        />
      </Head>
      <MainHead />
    </>
  );
};

export default HomePage;
