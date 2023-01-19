import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import next from "../assets/next.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import mantine from "../assets/mantine.svg";
import bootstrap from "../assets/bootstrap.svg";
import node from "../assets/node.svg";
import postgres from "../assets/postgres.svg";
import firebase from "../assets/firebase.svg";
import prisma from "../assets/prisma.svg";
import mongo from "../assets/mongo.svg";
import figma from "../assets/figma.svg";
import redux from "../assets/redux.svg";
import jest from "../assets/jest.svg";

import {
  IconAppWindow,
  IconAt,
  IconMapPin,
  IconPhoneCall,
  IconSunLow,
  IconTool,
  IconTools,
} from "@tabler/icons";
import { useTranslation } from "react-i18next";
import {
  IContactInfoProps,
  IDataProps,
  IProjectProps,
  ITabSkillsProps,
} from "../@types/global";

export const FrontEnd: IDataProps[] = [
  {
    skillImage: react,
    title: "React.JS",
    alt: "React.JS logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
  {
    skillImage: javascript,
    title: "JavaScript",
    alt: "JavaScript logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
  {
    skillImage: bootstrap,
    title: "Bootstrap",
    alt: "Bootstrap logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
  {
    skillImage: html5,
    title: "Html5",
    alt: "Html5 logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
  {
    skillImage: tailwind,
    title: "TailwindCSS ",
    alt: "Tailwind logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
  {
    skillImage: css3,
    title: "CSS3",
    alt: "CSS3 logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
];

export const StudyFrontEnd: IDataProps[] = [
  {
    skillImage: next,
    title: "Next.JS",
    alt: "Next.JS logo image",
    className: "w-full h-full p-2 xl:p-2",
  },
  {
    skillImage: mantine,
    title: "Mantine",
    alt: "Mantine logo image",
    className: "w-full h-full p-2 xl:p-2",
  },
  {
    skillImage: typescript,
    title: "Typescript",
    alt: "Typescript logo image",
    className: "w-full h-full xl:p-1",
  },
];

export const BackEnd: IDataProps[] = [
  {
    skillImage: node,
    title: "Node.JS",
    alt: "Node.js logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
  {
    skillImage: javascript,
    title: "JavaScript",
    alt: "JavaScript logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
  {
    skillImage: postgres,
    title: "PostgreSQL",
    alt: "PostgreSQL logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
  {
    skillImage: firebase,
    title: "Firebase",
    alt: "Firebase logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
];
export const StudyBackEnd: IDataProps[] = [
  {
    skillImage: prisma,
    title: "Prisma",
    alt: "Prisma logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
  {
    skillImage: typescript,
    title: "Typescript",
    alt: "Typescript logo image",
    className: "w-full h-full",
  },
  {
    skillImage: mongo,
    title: "MongoDB",
    alt: "MongoDB logo image",
    className: "w-full h-full p-1 xl:p-2",
  },
];

export const Design: IDataProps[] = [
  {
    skillImage: figma,
    title: "Figma",
    alt: "Figma logo image",
    className: "w-full h-full p-2",
  },
];

export const Utilities: IDataProps[] = [
  {
    skillImage: redux,
    title: "Redux",
    alt: "Redux logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
];

export const StudyUtilities: IDataProps[] = [
  {
    skillImage: jest,
    title: "Jest",
    alt: "Jest logo image",
    className: "w-full h-full p-2 xl:p-3",
  },
];

export const useTabSkills = () => {
  const { t } = useTranslation();
  const title = t("skills.title") || "";
  const tabSkills: ITabSkillsProps[] = [
    {
      title: "Front-End",
      icon: IconAppWindow,
      value: "frontEnd",
    },
    /* {
      title: "Back-End",
      icon: IconDatabase,
      value: "backEnd",
    }, */
    {
      title: "Design",
      icon: IconTools,
      value: "design",
    },
    {
      title: title,
      icon: IconTool,
      value: "utilities",
    },
  ];
  return tabSkills;
};

export const contactInfo: IContactInfoProps[] = [
  {
    title: "contactInfo.Email",
    icon: IconAt,
    value: "thaliszambarda@gmail.com",
  },
  {
    title: "contactInfo.Phone",
    icon: IconPhoneCall,
    value: "+55 (53) 999675436",
  },
  {
    title: "contactInfo.Address",
    icon: IconMapPin,
    value: "Candiota-RS",
  },
  {
    title: "contactInfo.Working Hours",
    icon: IconSunLow,
    value: "contactInfo.Value",
  },
];

export const ProjectsData: IProjectProps[] = [
  {
    title: "projectsData.title0",
    description: "projectsData.description0",
    urlGithub: "https://github.com/trelcray/todoList",
    urlProject: "https://todo-list-trelcray.vercel.app/",
    urlImage: "/todoList.svg",
    urlSkill1: react,
    urlSkill2: tailwind,
    urlSkill3: typescript,
    urlSkill4: redux,
  },
  {
    title: "projectsData.title1",
    description: "projectsData.description1",
    urlGithub: "https://github.com/trelcray/github-repositories",
    urlProject: "https://trelcray-github-io.vercel.app/",
    urlImage: "/gitRepositories.svg",
    urlSkill1: react,
    urlSkill2: tailwind,
    urlSkill3: typescript,
    urlSkill4: html5,
  },
  {
    title: "projectsData.title2",
    description: "projectsData.description2",
    urlGithub: "https://github.com/trelcray/teste-athenas",
    urlProject: "https://crud-challenge-athenas.vercel.app/",
    urlImage: "/crud.svg",
    urlSkill1: react,
    urlSkill2: bootstrap,
    urlSkill3: typescript,
    urlSkill4: redux,
  },
];

export const data = [
  { label: "pages.home", link: "home" },
  { label: "pages.about", link: "about" },
  { label: "pages.experiences", link: "experiences" },
  { label: "pages.skills", link: "skills" },
  { label: "pages.projects", link: "projects" },
  { label: "pages.contact", link: "contact" },
];

export const language = [
  { label: "language.en", image: "Usa-flag.png", lng: "en" },
  { label: "language.pt", image: "Brazil-flag.png", lng: "pt" },
];
