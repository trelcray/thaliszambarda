import { Carousel, Embla } from "@mantine/carousel";
import { Box, Progress, Title } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { Slide } from "../components/Slide";

interface Props {}

export function Projects({}: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

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
    <div className="flex flex-col justify-center items-center mx-2 lg:mx-3 xl:mx-10 text-white lg:gap-16 min-h-screen">
      <Title className="text-white mt-6">Projects</Title>
      <Box className="xl:w-full">
        <Carousel
          dragFree
          slideGap="md"
          height={400}
          className="[&>div>button]:text-cyan-400 [&>div>button]:border-white w-[21rem] xl:w-96 sm:w-full"
          getEmblaApi={setEmbla}
          initialSlide={0}>
          <Carousel.Slide className="[&>div>div>.hidded]:hover:flex [&>div>div>.hidded]:hover:duration-500 [&>div>div>.hidded]:hover:ease-in-out [&>div>div>.buttons]:hover:justify-around [&>div>div>.info]:hover:justify-around [&>div>div>.hidded]:py-3 [&>div>div>div>button]:hover:flex md:[&>div>div>img]:hover:scale-50 max-w-lg">
            <Slide />
          </Carousel.Slide>
          <Carousel.Slide className="[&>div>div>.hidded]:hover:flex [&>div>div>.hidded]:hover:duration-500 [&>div>div>.hidded]:hover:ease-in-out  [&>div>div>.buttons]:hover:justify-around [&>div>div>.info]:hover:justify-around [&>div>div>.hidded]:py-3 [&>div>div>div>button]:hover:flex md:[&>div>div>img]:hover:scale-50 max-w-lg">
            <Slide />
          </Carousel.Slide>
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
            className="bg-gray-800 [&>div.mantine-xpnokq]:bg-cyan-400"
          />
        </div>
      </Box>
    </div>
  );
}
