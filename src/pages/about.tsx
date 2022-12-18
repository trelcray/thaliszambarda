import { Box, Card, Text, Title } from "@mantine/core";
import { IconPhoneCall, IconCake, IconMapPin } from "@tabler/icons";

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
    <div className="flex flex-col mx-2 text-center lg:text-start items-center justify-center gap-16 text-white min-h-screen">
      <Title>About</Title>
      <Box className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full">
        <Text>imagem</Text>
        <button>curriculo</button>
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
      <Card className="hover:-translate-y-1 hover:scale-110">
          <Box className="flex gap-2">
            <IconPhoneCall />
            <Text > Phone:</Text>
          </Box>
          <Text className="font-semibold">55+ (53)99967-5436</Text>
        </Card>
        <Card className="hover:-translate-y-1 hover:scale-110">
          <Box className="flex gap-2">
            <IconCake />
            <Text>Birth:</Text>
          </Box>
          <Text className="font-semibold">April, 1999 ({birthDate} years)</Text>
        </Card>
        <Card className="hover:-translate-y-1 hover:scale-110">
          <Box className="flex gap-2">
            <IconMapPin />
            <Text>From:</Text>
          </Box>
          <Text className="font-semibold">Candiota, RS</Text>
        </Card>
      </Box>
    </div>
  );
}
