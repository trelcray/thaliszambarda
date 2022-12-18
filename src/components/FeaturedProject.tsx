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
    <Box className="flex flex-col gap-3 max-w-xs ">
      <Title order={2}>Featured Project</Title>
      <Flex>
        <div className="bg-white w-44 h-28"></div>
        <Flex className="gap-2 mx-4 flex-wrap">
          {children}
        </Flex>
      </Flex>
      <Title order={3}>{title}</Title>
      <Text className="text-xs">{description}</Text>
      <Flex className="justify-around">
        <Button>Github Code</Button>
        <Button className="bg-cyan-400 border-cyan-400 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
          <p className="text-white">View Project</p>
        </Button>
      </Flex>
    </Box>
  );
}
