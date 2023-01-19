import { Carousel, Embla } from "@mantine/carousel";
import { Box, Progress, Title } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "./Slide";
import { ProjectsData } from "../utils/data";

export function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const { t } = useTranslation();

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  return (
    <div className="flex flex-col justify-center items-center mx-2 lg:mx-3 xl:mx-10 dark:text-white lg:gap-16 min-h-screen">
      <Title className="dark:text-white mt-6">{t("pages.projects")}</Title>
      <Box className="xl:w-full">
        <Carousel
          dragFree
          align="center"
          slideGap="md"
          height={400}
          className="[&>div>button]:text-cyan-400 [&>div>button]:border-2 [&>div>button]:border-gray-500 [&>div>button]:bg-gray-900  dark:[&>div>button]:bg-white w-[21rem] sm:w-full"
          getEmblaApi={setEmbla}
          initialSlide={0}>
          {ProjectsData?.map((project, i) => (
            <Carousel.Slide
              key={i}
              className="[&>div>div>.hidded]:hover:flex [&>div>div>div>a]:hover:flex [&>div>div>.hidded]:hover:duration-500 [&>div>div>.hidded]:hover:ease-in-out [&>div>div>.buttons]:hover:justify-between [&>div>div>.info]:hover:justify-between [&>div>div>div>button]:hover:flex max-w-lg">
              <Slide
                description={t(project.description)}
                title={t(project.title)}
                urlGithub={project.urlGithub}
                urlProject={project.urlProject}
                urlImage={project.urlImage}
                urlSkill1={project.urlSkill1}
                urlSkill2={project.urlSkill2}
                urlSkill3={project.urlSkill3}
                urlSkill4={project.urlSkill4}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <div className="w-full h-full">
          <Progress
            value={scrollProgress}
            styles={{
              bar: { transitionDuration: "0ms" },
              root: { maxWidth: 320 },
            }}
            size="sm"
            mt="xl"
            mx="auto"
            className="bg-gray-300 dark:bg-gray-800 [&>div.mantine-xpnokq]:bg-cyan-400"
          />
        </div>
      </Box>
    </div>
  );
}
