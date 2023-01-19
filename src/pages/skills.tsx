import { Box, Flex, Tabs, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import redux from "../assets/redux.svg";
import html5 from "../assets/html5.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import figma from "../assets/figma.svg";
import { SkillCard } from "../components/SkillCard";
import { FeaturedProject } from "../components/FeaturedProject";
import {
  BackEnd,
  Design,
  FrontEnd,
  StudyBackEnd,
  StudyFrontEnd,
  StudyUtilities,
  useTabSkills,
  Utilities,
} from "../utils/data";
import { useTranslation } from "react-i18next";
import { IIconsProps } from "../@types/global";

function Icons({ icon, ...props }: IIconsProps) {
  const Icon = icon;
  return <Icon {...props} />;
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<string | null>("frontEnd");

  const tabSkills = useTabSkills();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center lg:justify-start items-center mx-10 lg:mx-3 xl:mx-10 dark:text-white lg:gap-5 min-h-screen">
      <Title className="lg:mt-[4.2rem]">{t("pages.skills")}</Title>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        unstyled
        orientation="vertical"
        className="flex flex-col lg:min-h-[19rem] mt-5 lg:flex-row w-full justify-center items-center lg:items-start lg:justify-between">
        <Tabs.List className="flex lg:flex-col items-center lg:items-start lg:w-48">
          {tabSkills?.map((skill, i) => (
            <Tabs.Tab
              key={i}
              className={
                activeTab === skill.value
                  ? "flex items-center w-full min-w-[5.5rem] lg:w-48 hover:bg-gray-200/40 dark:hover:bg-gray-800/40 py-1 sm:py-2 lg:py-5 sm:px-2 lg:px-5 text-xl gap-2 text-cyan-400 border-b-2 lg:border-b-0 lg:border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                  : "flex items-center w-full min-w-[5.5rem] lg:w-48 hover:bg-gray-200/40 dark:hover:bg-gray-800/40 py-1 sm:py-2 lg:py-5 sm:px-2 lg:px-5 gap-2 text-xl dark:text-white border-b-2 lg:border-b-0 lg:border-l-2 border-gray-300 dark:border-gray-800"
              }
              value={skill.value}
              icon={
                <Icons icon={skill.icon} className="w-4 h-4 lg:w-8 lg:h-8" />
              }>
              <Text className="flex text-xs lg:text-lg min-w-[4rem]">
                {skill.title}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Tabs.Panel className="w-full lg:w-4/5" value="frontEnd">
          <Flex className="flex-col items-center mt-5 gap-5 lg:mt-0 lg:gap-0 lg:flex-row w-full justify-between lg:items-start">
            <Box className="flex flex-col gap-4 items-center">
              <Title order={4}>{t("skills.use")}</Title>
              <Flex className="gap-2 lg:gap-4 text-xs xl:text-base items-center w-full justify-evenly lg:max-w-[16rem] xl:max-w-xs flex-wrap">
                {FrontEnd?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <Box className="flex flex-col items-center justify-center gap-4">
              <Title order={4}>{t("skills.study")}</Title>
              <Flex className="gap-2 lg:gap-4 text-xs xl:text-base items-center justify-evenly lg:max-w-[15rem] flex-wrap">
                {StudyFrontEnd?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <FeaturedProject
              urlGithub="https://github.com/trelcray/github-repositories"
              urlProject="https://trelcray-github-io.vercel.app/"
              src="/gitRepositories.svg"
              description={t("projectsData.description1")}
              title={t("projectsData.title1")}>
              <Image
                src={react}
                className="bg-gray-900 dark:bg-white rounded-lg h-8 w-8 p-[.2rem]"
                alt="it's node logo"
              />
              <Image
                src={tailwind}
                className="bg-gray-900 dark:bg-white rounded-lg h-8 w-8 p-1"
                alt="it's prisma logo"
              />
              <Image
                src={typescript}
                className="bg-gray-900 dark:bg-white rounded-lg h-8 w-8 p-1"
                alt="it's javascript logo"
              />
              <Image
                src={html5}
                className="bg-gray-900 dark:bg-white rounded-lg h-8 w-8 p-1"
                alt="it's javascript logo"
              />
            </FeaturedProject>
          </Flex>
        </Tabs.Panel>

        {/* <Tabs.Panel className="w-full lg:w-4/5" value="backEnd">
          <Flex className="flex-col items-center mt-5 gap-5 lg:mt-0 lg:gap-0 lg:flex-row w-full justify-between lg:items-start">
            <Box className="flex flex-col gap-4 items-center">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-2 lg:gap-4 text-xs xl:text-base items-center w-full justify-evenly lg:max-w-[16rem] xl:max-w-xs flex-wrap">
                {BackEnd?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <Box className="flex flex-col items-center justify-center gap-4">
              <Title order={4}>In Study</Title>
              <Flex className="gap-2 lg:gap-4 text-xs xl:text-base items-center justify-evenly  lg:max-w-[15rem] flex-wrap">
                {StudyBackEnd?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <FeaturedProject
              description="A way to share your github profile with anyone passing by the site."
              title="Dev list server">
              <Image
                src={node}
                className="bg-white rounded-lg h-8 w-8 p-[.2rem]"
                alt="it's node logo"
              />
              <Image
                src={prisma}
                className="bg-white rounded-lg h-8 w-8 p-1"
                alt="it's prisma logo"
              />
              <Image
                src={javascript}
                className="bg-white rounded-lg h-8 w-8 p-1"
                alt="it's javascript logo"
              />
            </FeaturedProject>
          </Flex>
        </Tabs.Panel> */}

        <Tabs.Panel className="w-full lg:w-5/6" value="design">
          <Flex className="w-full flex-col lg:flex-row gap-5 lg:gap-0 mt-5 lg:mt-0 items-center lg:items-start justify-between">
            <Box className="flex flex-col gap-4 w-full items-center">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-4 max-w-[16rem] flex-wrap">
                {Design?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <FeaturedProject
              src="/portfolio.svg"
              urlGithub="https://github.com/trelcray/thaliszambarda"
              urlProject=""
              description={t("projectsData.description3")}
              title={t("projectsData.title3")}>
              <Image
                src={figma}
                className="bg-white rounded-lg h-8 w-8 p-[.2rem]"
                alt="it's node logo"
              />
            </FeaturedProject>
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel className="w-full lg:w-3/4" value="utilities">
          <Flex className="flex-col lg:flex-row gap-5 lg:gap-0 mt-5 lg:mt-0 w-full items-center lg:items-start justify-between">
            <Box className="flex flex-col gap-4 items-center">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-4 max-w-xs flex-wrap">
                {Utilities?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <Box className="flex flex-col items-center gap-4">
              <Title order={4}>In Study</Title>
              <Flex className="gap-4 max-w-[16rem] flex-wrap">
                {StudyUtilities?.map((skill, i) => (
                  <SkillCard
                    key={i}
                    alt={skill.alt}
                    className={skill.className}
                    skillImage={skill.skillImage}
                    title={skill.title}
                  />
                ))}
              </Flex>
            </Box>
            <FeaturedProject
              urlGithub="https://github.com/trelcray/todoList"
              urlProject="https://todo-list-trelcray.vercel.app/"
              src="/todoList.svg"
              description={t("projectsData.description0")}
              title={t("projectsData.title0")}>
              <Image
                src={react}
                className="bg-white rounded-lg h-8 w-8 p-[.2rem]"
                alt="it's node logo"
              />
              <Image
                src={tailwind}
                className="bg-white rounded-lg h-8 w-8 p-1"
                alt="it's prisma logo"
              />
              <Image
                src={typescript}
                className="bg-white rounded-lg h-8 w-8 p-1"
                alt="it's javascript logo"
              />
              <Image
                src={redux}
                className="bg-white rounded-lg h-8 w-8 p-1"
                alt="it's javascript logo"
              />
            </FeaturedProject>
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
