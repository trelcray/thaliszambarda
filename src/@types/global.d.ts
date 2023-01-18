export interface IDataProps {
  skillImage: string;
  title: string;
  alt: string;
  className: string;
}

export interface ITabSkillsProps {
  value: string;
  icon: FunctionComponent;
  title: string;
}
export interface IContactInfoProps {
  value: string;
  icon: FunctionComponent;
  title: string;
}

export interface IProjectProps {
  title: string;
  description: string;
  urlGithub: string;
  urlProject: string;
  urlImage: string;
  urlSkill1: string;
  urlSkill2: string;
  urlSkill3: string;
  urlSkill4: string;
}

interface I18n {
  tabSkills: ITabSkillsProps[];
  contactInfo: IContactInfoProps[];
  ProjectsData: IProjectProps[];
}

declare module '*.json' {
    const value: I18n;
    export default value;
}
