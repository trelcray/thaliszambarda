import { Anchor, Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { IFeaturedProjectProps } from "../@types/global";
import { Button } from "./Button";

export function FeaturedProject({
  description,
  title,
  children,
  src,
  urlGithub,
  urlProject,
}: IFeaturedProjectProps) {
  const { t } = useTranslation();
  return (
    <Box className="flex flex-col w-full items-center justify-center gap-3 max-w-xs">
      <Title order={4}>{t("skills.featured")}</Title>
      <Flex className="justify-around w-full">
        <Image
          alt="image project"
          src={src}
          height={900}
          width={900}
          quality={100}
          className="w-44 h-28"
        />
        <Flex className="gap-6 justify-evenly max-w-[8rem] flex-wrap">
          {children}
        </Flex>
      </Flex>
      <Title order={5}>{title}</Title>
      <Text className="text-xs">{description}</Text>
      <Flex className="justify-around w-full">
        <Anchor href={urlGithub} target="_blank" className="no-underline">
          <Button className="text-xs md:text-base">
            {t("skills.buttonGithub")}
          </Button>
        </Anchor>
        <Anchor href={urlProject} target="_blank" className="no-underline">
          <Button className="bg-cyan-400 border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
            <p className="text-white text-xs md:text-base">
              {t("skills.buttonProject")}
            </p>
          </Button>
        </Anchor>
      </Flex>
    </Box>
  );
}
