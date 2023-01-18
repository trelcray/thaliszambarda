import { Box, Flex, Text, Title } from "@mantine/core";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

interface IFeaturedProjectProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FeaturedProject({
  description,
  title,
  children,
}: IFeaturedProjectProps) {
  const { t } = useTranslation();
  return (
    <Box className="flex flex-col w-full items-center justify-center gap-3 max-w-xs">
      <Title order={4}>Featured Project</Title>
      <Flex className="justify-around w-full">
        <div className="bg-gray-900 dark:bg-white w-44 h-28"></div>
        <Flex className="gap-6 justify-evenly max-w-[8rem] flex-wrap">
          {children}
        </Flex>
      </Flex>
      <Title order={5}>{title}</Title>
      <Text className="text-xs">{description}</Text>
      <Flex className="justify-around w-full">
        <Button className="text-xs md:text-base">{t("tabSkills.buttonGithub")}</Button>
        <Button className="bg-cyan-400 border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
          <p className="text-white text-xs md:text-base">{t("tabSkills.buttonProject")}</p>
        </Button>
      </Flex>
    </Box>
  );
}
