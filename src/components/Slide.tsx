import { Flex, Title } from "@mantine/core";
import Image from "next/image";
import { Button } from "./Button";

interface Props {}

export function Slide({}: Props) {
  return (
    <div className="flex flex-col bg-gray-700 rounded w-full h-full">
      <div className="flex flex-col sm:flex-row justify-center items-center rounded w-full h-4/5 px-5">
        <Image
          className="bg-cover rounded w-full h-full transition ease-in-out duration-500" // h-3/4
          width={1}
          height={1}
          quality={100}
          src="/cartoon.svg"
          alt="developer cartoon"
        />
        <div className="hidded duration-500 ease-in-out hidden text-center w-full text-white md:w-1/2 justify-end">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            doloribus nisi cupiditate expedita nihil.
          </p>
        </div>
      </div>
      <Flex className="w-full h-full pb-1 justify-around">
        <Flex className="info flex-col text-center text-white justify-end">
          <Title className="text-base md:text-lg">testando</Title>
          <div className="flex gap-1 md:gap-4">
            <div className="bg-white rounded-lg h-6 w-6 p-[.2rem]" />
            <div className="bg-white rounded-lg h-6 w-6 p-1" />
            <div className="bg-white rounded-lg h-6 w-6 p-1" />
            <div className="bg-white rounded-lg h-6 w-6 p-1" />
          </div>
        </Flex>
        <div className="buttons flex flex-col justify-end">
          <Button className="hidden p-1 bg-cyan-400 border-cyan-400 dark:hover:bg-cyan-500 dark:hover:border-cyan-500">
            <p className="text-white text-xs md:text-base">View Project</p>
          </Button>
          <Button className="text-white p-1 text-xs md:text-base">Github Code</Button>
        </div>
      </Flex>
    </div>
  );
}
