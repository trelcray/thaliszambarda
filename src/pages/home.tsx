import { Box, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "../components/Button";
import { IconRubberStamp } from "@tabler/icons";
import { useTranslation } from "react-i18next";

interface Props {}

export function Home({}: Props) {

  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [t("home.first"), t("home.second"), t("home.third")],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="flex flex-col lg:flex-row justify-center md:ml-20 md:gap-2 items-center lg:pb-28 min-h-screen">
      <Box className="flex flex-col gap-10">
        <section className="flex flex-col gap-2 lg:gap-4 lg:w-96 text-center">
          <Text className="font-semibold text-xl md:text-3xl lg:text-4xl text-cyan-400">
            {t("home.title")}
          </Text>
          <Title className="text-3xl md:text-5xl lg:text-6xl dark:text-white">
            {text}
            <Cursor />
          </Title>
          <Text className="dark:text-gray-400 text-gray-800">
            {t("home.description")}
          </Text>
        </section>
        <Button
          className="text-gray-800 border-gray-800 dark:border-cyan-400 hover:bg-gray-200/60"
          leftIcon={<IconRubberStamp size={20} />}>
          {t("home.button")}
        </Button>
      </Box>
      <Image
        className="bg-cover w-[45rem] h-[35rem]"
        width={500}
        height={500}
        quality={100}
        src="/bg-illustration.svg"
        alt="developer cartoon"
      />
    </div>
  );
}
