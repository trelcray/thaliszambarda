import { Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./Button";

interface IFeaturedProjectProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FeaturedProject({ description, title, children }: IFeaturedProjectProps) {
  return (
    <Box className="flex flex-col w-full items-center justify-center gap-3 max-w-xs">
      <Title order={4}>Featured Project</Title>
      <Flex className="justify-around w-full">
        <div className="bg-white w-44 h-28"></div>
        <Flex className="gap-6 justify-evenly max-w-[8rem] flex-wrap">
          {children}
        </Flex>
      </Flex>
      <Title order={5}>{title}</Title>
      <Text className="text-xs">{description}</Text>
      <Flex className="justify-around w-full">
        <Button className="text-xs md:text-base">Github Code</Button>
        <Button className="bg-cyan-400 border-cyan-400 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
          <p className="text-white text-xs md:text-base">View Project</p>
        </Button>
      </Flex>
    </Box>
  );
}
