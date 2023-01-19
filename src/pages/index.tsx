import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Experiences } from "../components/experiences";
import { Home } from "../components/home";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { InView, useInView } from "react-intersection-observer";

export default function Index() {
  const [inViewHome, setInViewHome] = useState(false);
  const [inViewAbout, setInViewAbout] = useState(false);
  const [inViewExperiences, setInViewExperiences] = useState(false);
  const [inViewSkills, setInViewSkills] = useState(false);
  const [inViewProjects, setInViewProjects] = useState(false);
  const [inViewContact, setInViewContact] = useState(false);
  const [index, setIndex] = useState(0);

  const [ref] = useInView();
  const [ref2] = useInView();
  const [ref3] = useInView();
  const [ref4] = useInView();
  const [ref5] = useInView();
  const [ref6] = useInView();

  useEffect(() => {
    if (inViewHome) {
      setIndex(0);
    } else if (inViewAbout) {
      setIndex(1);
    } else if (inViewExperiences) {
      setIndex(2);
    } else if (inViewSkills) {
      setIndex(3);
    } else if (inViewProjects) {
      setIndex(4);
    } else {
      setIndex(5);
    }
  }, [
    inViewHome,
    inViewAbout,
    inViewExperiences,
    inViewSkills,
    inViewProjects,
    inViewContact,
  ]);

  return (
    <div className="flex flex-col gap-16 bg-repeat min-h-screen bg-white dark:bg-transparent">
      <Header inView={index} />
      <InView onChange={(inView) => setInViewHome(inView)}>
        <section id="home" ref={ref}>
          <Home />
        </section>
      </InView>
      <InView onChange={(inView) => setInViewAbout(inView)}>
        <section id="about" ref={ref2}>
          <About />
        </section>
      </InView>
      <InView onChange={(inView) => setInViewExperiences(inView)}>
        <section id="experiences" ref={ref3}>
          <Experiences />
        </section>
      </InView>
      <InView onChange={(inView) => setInViewSkills(inView)}>
        <section id="skills" ref={ref4}>
          <Skills />
        </section>
      </InView>
      <InView onChange={(inView) => setInViewProjects(inView)}>
        <section id="projects" ref={ref5}>
          <Projects />
        </section>
      </InView>
      <InView onChange={(inView) => setInViewContact(inView)}>
        <section id="contact" ref={ref6}>
          <Contact />
        </section>
      </InView>
    </div>
  );
}
