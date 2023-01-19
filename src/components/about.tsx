import { Anchor, Box, Card, Text, Title } from "@mantine/core";
import { IconCake, IconArrowBarToDown } from "@tabler/icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

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
      <Title className="lg:mt-16">{t("pages.about")}</Title>
      <Box className="flex gap-10 flex-col lg:flex-row items-center lg:justify-evenly w-full">
        <Image
          src="/eu.jpeg"
          alt="my image"
          className="h-96 w-96 rounded-lg"
          width={400}
          height={400}
          quality={100}
        />
        <section className="max-w-xl">
          <Title>{t("about.title")}</Title>
          <section className="flex flex-col gap-2 mt-2">
            <Text>{t("about.description")}</Text>
            <Text>{t("about.paragraph1")}</Text>
            <Text>{t("about.paragraph2")}</Text>
            <Text>{t("about.paragraph3")}</Text>
          </section>
        </section>
      </Box>
      <Box className="flex flex-wrap gap-2 items-center justify-around w-full">
        <Anchor href="curriculo.pdf" target="_blank" className="no-underline">
          <Card className="hover:-translate-y-1 hover:scale-110 cursor-pointer bg-gray-900 text-white dark:bg-white dark:text-black">
            <Box className="flex gap-2">
              <IconArrowBarToDown />
              <Text> {t("about.buttonTitle")}</Text>
            </Box>
            <Text className="font-semibold">
              {t("about.buttonDescription")}
            </Text>
          </Card>
        </Anchor>
        <Card className="hover:-translate-y-1 hover:scale-110 bg-gray-900 text-white dark:bg-white dark:text-black">
          <Box className="flex gap-2">
            <IconCake />
            <Text>{t("about.buttonTitle2")}</Text>
          </Box>
          <Text className="font-semibold">
            {t("about.birthDate")} ({birthDate} {t("about.years")})
          </Text>
        </Card>
      </Box>
    </div>
  );
}
