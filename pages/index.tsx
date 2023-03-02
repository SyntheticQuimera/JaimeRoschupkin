import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { GetStaticProps } from "next";
import { BottomTab } from "../components/BottomTab";
import { Header } from "../components/Header";
import { HomeApp } from "../components/sections/HomeApp";
import { AboutMe } from "../components/sections/AboutMe";
import { ContactMe } from "../components/sections/ContactMe";
import { Projects } from "../components/sections/Projects";
import {
  HomePage,
  Project,
  Service,
  SkillBadge,
  AboutMeInfo,
} from "../typings";
import { fetchHome } from "../utils/fetchHome";
import { fetchService } from "../utils/fetchService";
import { fetchProject } from "../utils/fetchProject";
import { fetchSkillBadge } from "../utils/fetchSkillBadge";
import { fetchAboutMeInfo } from "../utils/fetchAboutMeInfo";

type Props = {
  homePage: HomePage;
  aboutMeInfo: AboutMeInfo;
  services: Service[];
  project: Project[];
  skillBadge: SkillBadge[];
};
const Home = ({
  homePage,
  project,
  aboutMeInfo,
  skillBadge,
  services,
}: Props) => {
  return (
    <div className='text-white h-screen z-0 scrollbar-track-gray-900/30'>
      <Head>
        <title>Synth Quimera</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      {/* Header */}
      <BottomTab />
      <Header />
      {/* Home */}
      <section id='home'>
        <HomeApp home={homePage} />
      </section>
      <section id='aboutMe'>
        <AboutMe
          aboutMeInfo={aboutMeInfo}
          services={services}
          skillBadge={skillBadge}
        />
      </section>
      {/* Projects */}
      <section id='projects'>
        <Projects project={project} />
      </section>
      {/* Contact me */}
      <section id='contactMe'>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const homePage: HomePage = await fetchHome();
  const aboutMeInfo: AboutMeInfo = await fetchAboutMeInfo();
  const services: Service[] = await fetchService();
  const project: Project[] = await fetchProject();
  const skillBadge: SkillBadge[] = await fetchSkillBadge();

  return {
    props: { homePage, aboutMeInfo, services, project, skillBadge },
    revalidate: 10,
  };
};
