import { Anchor, Flex, Title } from "@mantine/core";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ISlideProps } from "../@types/global";
import { Button } from "./Button";

export function Slide({
  title,
  description,
  urlImage,
  urlGithub,
  urlProject,
  urlSkill1,
  urlSkill2,
  urlSkill3,
  urlSkill4,
}: ISlideProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-gray-300 dark:bg-gray-700 rounded w-full h-full">
      <div className="flex flex-col sm:flex-row justify-center items-center rounded w-full h-80 p-1">
        <Image
          className="bg-cover rounded w-full h-full transition ease-in-out duration-500" // h-3/4
          width={1400}
          height={860}
          quality={100}
          src={urlImage}
          alt="developer cartoon"
        />
        <div className="hidded duration-500 ease-in-out hidden text-center w-full text-white p-2 justify-end">
          <p className="text-black dark:text-white text-xs w-full">
            {description}
          </p>
        </div>
      </div>
      <Flex className="w-full h-full pb-1 justify-around max-h-24">
        <Flex className="info flex-col text-center text-white justify-end">
          <Title className="text-black dark:text-white text-base md:text-lg">
            {title}
          </Title>
          <div className="flex gap-1 md:gap-4">
            <Image
              alt="image"
              src={urlSkill1}
              className="bg-gray-900 dark:bg-white rounded-lg h-6 w-6 p-[.2rem]"
            />
            <Image
              alt="image"
              src={urlSkill2}
              className="bg-gray-900 dark:bg-white rounded-lg h-6 w-6 p-1"
            />
            <Image
              alt="image"
              src={urlSkill3}
              className="bg-gray-900 dark:bg-white rounded-lg h-6 w-6 p-1"
            />
            <Image
              alt="image"
              src={urlSkill4}
              className="bg-gray-900 dark:bg-white rounded-lg h-6 w-6 p-1"
            />
          </div>
        </Flex>
        <div className="buttons flex flex-col justify-end">
          <Anchor
            className="hidden no-underline"
            href={urlProject}
            target="_blank">
            <Button className="min-w-[8.5rem] p-1 bg-cyan-400 border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
              <p className="text-white text-xs md:text-base">
                {t("projectsData.buttonProject")}
              </p>
            </Button>
          </Anchor>
          <Anchor href={urlGithub} target="_blank" className="no-underline">
            <Button className="min-w-[8.5rem] text-white p-1 text-xs md:text-base">
              {t("projectsData.buttonGithub")}
            </Button>
          </Anchor>
        </div>
      </Flex>
    </div>
  );
}
