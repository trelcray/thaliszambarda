import { Box, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "../components/Button";
import { IconRubberStamp } from "@tabler/icons";

interface Props {}

export function Home({}: Props) {
  const [text] = useTypewriter({
    words: ["Professional", "Front-End", "Developer"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="flex flex-col lg:flex-row justify-center md:ml-20 md:gap-2 items-center">
      <Box className="flex flex-col gap-10">
        <section className="flex flex-col gap-2 lg:gap-4 lg:w-96 text-center">
          <Text className="font-semibold text-xl md:text-3xl lg:text-4xl dark:text-blue-600 text-sky-800">
            Hello I{`'`}m,
          </Text>
          <Title className="text-3xl md:text-5xl lg:text-6xl text-white">
            {text}
            <Cursor />
          </Title>
          <Text className="dark:text-gray-400 text-gray-300">
            I Have a Degree in Systems Development
          </Text>
        </section>
        <Button icon={<IconRubberStamp size={20} />}>Hire Me</Button>
      </Box>
      <Image
        className="bg-cover w-[45rem] h-[28rem]"
        width={500}
        height={500}
        quality={100}
        src="/cartoon.svg"
        alt="developer cartoon"
      />
    </div>
  );
}
