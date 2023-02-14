import { ButtonProps, TextInputProps } from "@mantine/core";
import { TablerIconProps } from "@tabler/icons";
import { FunctionComponent, ReactNode } from "react";

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

declare module "*.json" {
  const value: I18n;
  export default value;
}

export interface IButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
}

export interface IFeaturedProjectProps {
  title: string;
  description: string;
  children: ReactNode;
  src: string;
  urlGithub: string;
  urlProject: string;
}

export interface IHeaderProps {
  inView: number;
}

export interface ISkillCardProps {
  skillImage: string;
  className: string;
  alt: string;
  title: string;
}

export interface ISlideProps {
  title: string;
  description: string;
  urlGithub?: string;
  urlProject?: string;
  urlImage: string;
  urlSkill1: string;
  urlSkill2: string;
  urlSkill3: string;
  urlSkill4: string;
}

export interface ITextInputProps extends TextInputProps {
  className?: string;
}

export interface IIconsProps extends TablerIconProps {
  icon: FunctionComponent;
}

export interface IIconsProps extends TablerIconProps {
  icon: FunctionComponent;
}

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
