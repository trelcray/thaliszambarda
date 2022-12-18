import { Avatar, Box, Flex, Tabs, Title } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons";
import {
  BackEnd,
  Design,
  FrontEnd,
  StudyBackEnd,
  StudyFrontEnd,
  StudyUtilities,
  Utilities,
} from "../utils/data";
import Image from "next/image";
import { useState } from "react";
import prisma from "../assets/prisma.svg";
import node from "../assets/node.svg";
import javascript from "../assets/javascript.svg";
import figma from "../assets/figma.svg";
import { SkillCard } from "../components/SkillCard";
import { FeaturedProject } from "../components/FeaturedProject";

interface Props {}

export function Skills({}: Props) {
  const [activeTab, setActiveTab] = useState<string | null>("frontEnd");

  return (
    <div className="flex flex-col justify-center items-center mx-10 text-white gap-16 min-h-screen">
      <Title>Skills</Title>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        unstyled
        className="flex w-full justify-between">
        <Tabs.List className="flex flex-col min-w-[12rem]">
          <Tabs.Tab
            className={
              activeTab === "frontEnd"
                ? "flex items-center hover:bg-gray-900/20 p-5 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-5 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="frontEnd"
            icon={<IconPhoto size={38} />}>
            Front-End
          </Tabs.Tab>
          <Tabs.Tab
            className={
              activeTab === "backEnd"
                ? "flex items-center hover:bg-gray-900/20 p-5 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-5 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="backEnd"
            icon={<IconMessageCircle size={38} />}>
            Back-End
          </Tabs.Tab>
          <Tabs.Tab
            className={
              activeTab === "design"
                ? "flex items-center hover:bg-gray-900/20 p-5 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-5 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="design"
            icon={<IconSettings size={38} />}>
            Design
          </Tabs.Tab>
          <Tabs.Tab
            className={
              activeTab === "utilities"
                ? "flex items-center hover:bg-gray-900/20 p-5 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-5 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="utilities"
            icon={<IconSettings size={38} />}>
            Utilities
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className="w-full" value="frontEnd">
          <Flex className="justify-evenly w-full">
            <Box className="flex flex-col gap-4">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-4 max-w-xs flex-wrap">
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
            <Box className="flex flex-col gap-4">
              <Title order={4}>In Study</Title>
              <Flex className="gap-4 max-w-[16rem] flex-wrap">
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
          <Flex className="w-full justify-evenly">
            <Box className="flex flex-col gap-4">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-4 max-w-xs flex-wrap">
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
            <Box className="flex flex-col gap-4">
              <Title order={4}>In Study</Title>
              <Flex className="gap-4 max-w-[16rem] flex-wrap">
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
