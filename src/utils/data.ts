import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import next from "../assets/next.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import mantine from "../assets/mantine.svg";

export interface IFrontEnd {
  skillImage: string;
  title: string;
  alt: string;
}

export const FrontEnd: IFrontEnd[] = [
  {
    skillImage: react,
    title: "React.JS",
    alt: "React.JS logo image",
  },
  {
    skillImage: tailwind,
    title: "TailwindCSS ",
    alt: "Tailwind logo image",
  },  
  {
    skillImage: typescript,
    title: "Typescript",
    alt: "Typescript logo image",
  },
  {
    skillImage: javascript,
    title: "JavaScript",
    alt: "JavaScript logo image",
  },
  {
    skillImage: html5,
    title: "Html5",
    alt: "Html5 logo image",
  },
  {
    skillImage: css3,
    title: "CSS3",
    alt: "CSS3 logo image",
  },
]

export const StudyFrontEnd: IFrontEnd[] = [
  {
    skillImage: next,
    title: "Next.JS",
    alt: "Next.JS logo image",
  },
  {
    skillImage: mantine,
    title: "Mantine",
    alt: "Mantine logo image",
  },
]