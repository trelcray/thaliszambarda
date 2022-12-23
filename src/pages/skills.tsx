import { Box, Flex, Tabs, Text, Title } from "@mantine/core";
import { IconAppWindow, TablerIconProps } from "@tabler/icons";
import {
  BackEnd,
  Design,
  FrontEnd,
  StudyBackEnd,
  StudyFrontEnd,
  StudyUtilities,
  TabSkills,
  Utilities,
} from "../utils/data";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import prisma from "../assets/prisma.svg";
import node from "../assets/node.svg";
import javascript from "../assets/javascript.svg";
import figma from "../assets/figma.svg";
import { SkillCard } from "../components/SkillCard";
import { FeaturedProject } from "../components/FeaturedProject";

interface Props {}

interface IIconsProps extends TablerIconProps {
  icon: FunctionComponent;
}

function Icons({ icon, ...props }: IIconsProps) {
  const Icon = icon;
  return <Icon {...props} />;
}

export function Skills({}: Props) {
  const [activeTab, setActiveTab] = useState<string | null>("frontEnd");

  return (
    <div className="flex flex-col justify-center items-center mx-10 lg:mx-3 xl:mx-10 text-white lg:gap-16 min-h-screen">
      <Title>Skills</Title>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        unstyled
        orientation="vertical"
        className="flex flex-col mt-5 lg:flex-row w-full lg:justify-between">
        <Tabs.List className="flex lg:mt-2 lg:flex-col items-center lg:items-start justify-center h-full w-full lg:w-56">
          {TabSkills?.map((skill, i) => (
            <Tabs.Tab
              key={i}
              className={
                activeTab === skill.value
                  ? "flex items-center w-full min-w-[5.5rem] lg:w-48 hover:bg-gray-900/20 py-1 sm:py-2 lg:py-5 sm:px-2 lg:px-5 text-xl gap-2 text-cyan-400 border-b-2 lg:border-b-0 lg:border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                  : "flex items-center w-full min-w-[5.5rem] lg:w-48 hover:bg-gray-900/20 py-1 sm:py-2 lg:py-5 sm:px-2 lg:px-5 gap-2 text-xl text-white border-b-2 lg:border-b-0 lg:border-l-2 border-gray-800"
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

        <Tabs.Panel className="w-full" value="frontEnd">
          <Flex className="flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-10 mt-5 lg:mt-0 w-full lg:justify-between">
            <Box className="flex flex-col items-center justify-center gap-4">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-2 lg:gap-4 text-xs xl:text-base items-center w-full justify-evenly sm:mx-10 lg:max-w-[16rem] xl:max-w-xs flex-wrap">
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
              <Title order={4}>In Study</Title>
              <Flex className="gap-2 lg:gap-4 text-xs xl:text-base items-center justify-evenly  lg:max-w-xs flex-wrap">
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
        </Tabs.Panel>

        <Tabs.Panel className="w-full" value="backEnd">
          <Flex className="flex-col lg:flex-row items-center justify-center gap-6 mt-5 lg:mt-0 w-full lg:justify-evenly">
            <Box className="flex flex-col items-center justify-center gap-4">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-4 text-xs items-center justify-between sm:mx-10 lg:max-w-xs flex-wrap">
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
              <Flex className="gap-4 text-xs items-center justify-center lg:max-w-[16rem] flex-wrap">
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
        </Tabs.Panel>

        <Tabs.Panel className="w-3/5" value="design">
          <Flex className="justify-between mr-[3.1rem]">
            <Box className="flex flex-col gap-4">
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
              description="A way to share your github profile with anyone passing by the site."
              title="Dev list server">
              <Image
                src={figma}
                className="bg-white rounded-lg h-8 w-8 p-[.2rem]"
                alt="it's node logo"
              />
            </FeaturedProject>
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel className="w-full" value="utilities">
          <Flex className="justify-around w-full ml-9">
            <Box className="flex flex-col gap-4">
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
            <Box className="flex flex-col gap-4">
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
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
