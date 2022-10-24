import AboutMe from "../../components/About/AboutMe";
import Head from "next/head";

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>amil.dev - About Me</title>
        <meta content="Amil Silahic. Front End Web Developer About Me Page" />
      </Head>
      <AboutMe />
    </>
  );
};

export default AboutMePage;
