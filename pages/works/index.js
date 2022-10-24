import Head from "next/head";
import Portfolio from "../../components/Portfolio/Portfolio";

const WorksPage = () => {
  return (
    <>
      <Head>
        <title>amil.dev - Works</title>
        <meta content="Amil Silahic. Front End Web Developer. Works and Portfolio Page" />
      </Head>
      <Portfolio />
    </>
  );
};

export default WorksPage;
