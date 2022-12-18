import { Avatar, Box, Flex, Tabs, Title } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons";
import { FrontEnd, StudyFrontEnd } from "../utils/data";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/Button";

interface Props {}

export function Skills({}: Props) {
  const [activeTab, setActiveTab] = useState<string | null>("frontEnd");

  return (
    <div className="flex flex-col justify-center items-center text-white gap-16 min-h-screen">
      <Title>Skills</Title>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        unstyled
        className="flex justify-evenly w-full">
        <Tabs.List className="flex flex-col min-w-[12rem]">
          <Tabs.Tab
            className={
              activeTab === "frontEnd"
                ? "flex items-center hover:bg-gray-900/20 p-4 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-4 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="frontEnd"
            icon={<IconPhoto size={38} />}>
            Front-End
          </Tabs.Tab>
          <Tabs.Tab
            className={
              activeTab === "backEnd"
                ? "flex items-center hover:bg-gray-900/20 p-4 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-4 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="backEnd"
            icon={<IconMessageCircle size={38} />}>
            Back-End
          </Tabs.Tab>
          <Tabs.Tab
            className={
              activeTab === "design"
                ? "flex items-center hover:bg-gray-900/20 p-4 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-4 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="design"
            icon={<IconSettings size={38} />}>
            Design
          </Tabs.Tab>
          <Tabs.Tab
            className={
              activeTab === "utilities"
                ? "flex items-center hover:bg-gray-900/20 p-4 text-xl gap-2 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "flex items-center hover:bg-gray-900/20 p-4 gap-2 text-xl text-white border-l-2 border-gray-800"
            }
            value="utilities"
            icon={<IconSettings size={38} />}>
            Utilities
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="frontEnd" pt="xs">
          <Flex className="gap-8">
            <Box className="flex flex-col gap-4">
              <Title order={4}>Technologies in use</Title>
              <Flex className="gap-4 max-w-xs flex-wrap">
                {FrontEnd?.map((skill, i) => (
                  <Box
                    key={i}
                    className="flex flex-col rounded shadow gap-2 bg-cyan-800 py-1 w-24 items-center">
                    <Image
                      src={skill.skillImage}
                      width={56}
                      height={56}
                      className="w-14 h-14"
                      alt={skill.alt}
                    />
                    <p>{skill.title}</p>
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box className="flex flex-col gap-4">
              <Title order={4}>In Study</Title>
              <Flex className="gap-4 max-w-xs flex-wrap">
              {StudyFrontEnd?.map((skill, i) => (
                  <Box
                    key={i}
                    className="flex flex-col shadow rounded gap-2 bg-cyan-800 py-1 w-24 items-center">
                    <Image
                      src={skill.skillImage}
                      width={56}
                      height={56}
                      className="w-14 h-14"
                      alt={skill.alt}
                    />
                    <p>{skill.title}</p>
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box className="flex flex-col gap-4 max-w-xs">
              <Title order={4}>Featured Project</Title>
              <Flex>
                <div className="bg-white w-40 h-24"></div>
                <Flex className="gap-2 mx-1 flex-wrap">
                  <Avatar
                    src="/figma.svg"
                    className="bg-white rounded-lg"
                    alt="it's me"
                  />
                  <Avatar
                    src="/figma.svg"
                    className="bg-white rounded-lg"
                    alt="it's me"
                  />
                </Flex>
              </Flex>
              <p className="text-xs">
                uma forma de compartilhar seu perfil no github com quem passar
                pelo site
              </p>
              <Flex className="justify-around">
                <Button>Github Code</Button>
                <Button className="bg-cyan-400 border-cyan-400 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
                  <p className="text-white">View Project</p>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="backEnd" pt="xs">
          <Flex className="gap-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="design" pt="xs">
          <Flex className="gap-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="utilities" pt="xs">
          <Flex className="gap-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
