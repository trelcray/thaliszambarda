import { Anchor, Box, Card, Text, Title } from "@mantine/core";
import { IconCake, IconArrowBarToDown } from "@tabler/icons";
import Image from "next/image";

interface Props {}

export function About({}: Props) {
  function getAge(dateString: string) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const birthDate = getAge("1999-04-29");

  return (
    <div className="flex flex-col mx-2 text-center lg:text-start items-center justify-center gap-10 dark:text-white min-h-screen">
      <Title className="lg:mt-16">About</Title>
      <Box className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full">
        <Image
          src="/eu.jpeg"
          alt="my image"
          className="h-96 w-96 rounded-lg"
          width={400}
          height={400}
          quality={100}
        />
        <section className="max-w-xl">
          <Title>Um pouco sobre mim:</Title>
          <section className="flex flex-col gap-2 mt-2">
            <Text>Olá, me chamo Thalis Viana Zambarda!</Text>
            <Text>
              Sou apaixonado por tecnologia desde a adolescência, e acabei
              cursado Tecnologia em análise e desenvolvimento de sistemas no
              IFSUL, onde me envolvi ainda mais com programação em projetos
              extracurriculares.
            </Text>
            <Text>
              Movido por essa paixão aprendi a stack React.js Node.js e
              Typescript principalmente com os conteúdos da RocketSeat e acabei
              conseguindo um trabalho em um projeto como front-end durante a
              pandemia onde desenvolvi minhas habilidades de soft e hard skills.
            </Text>
            <Text>
              Trabalhei principalmente com React.js no desenvolvimento de
              dashboards e Node.js na criação de api rest, ambas as tecnologias
              utilizadas em conjunto com JavaScript.
            </Text>
          </section>
        </section>
      </Box>
      <Box className="flex flex-wrap gap-2 items-center justify-around w-full">
        <Anchor href="curriculo.pdf" target="_blank" className="no-underline">
        <Card className="hover:-translate-y-1 hover:scale-110 cursor-pointer bg-gray-900 text-white dark:bg-white dark:text-black">
          <Box className="flex gap-2">
            <IconArrowBarToDown />
            <Text> Resume:</Text>
          </Box>
          <Text className="font-semibold">Click to open</Text>
        </Card>
        </Anchor>
        <Card className="hover:-translate-y-1 hover:scale-110 bg-gray-900 text-white dark:bg-white dark:text-black">
          <Box className="flex gap-2">
            <IconCake />
            <Text>Birth:</Text>
          </Box>
          <Text className="font-semibold">April, 1999 ({birthDate} years)</Text>
        </Card>
      </Box>
    </div>
  );
}
