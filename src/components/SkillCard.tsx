import { Box } from "@mantine/core";
import Image from "next/image";
import { ISkillCardProps } from "../@types/global";

export function SkillCard({
  alt,
  className,
  skillImage,
  title,
}: ISkillCardProps) {
  return (
    <Box className="flex flex-col shadow-lg shadow-gray-800/50 rounded border border-gray-400/50 w-20 h-22 xl:w-24 xl:h-22 items-center">
      <Box className="p-0 w-full h-full">
        <Image
          src={skillImage}
          width={1}
          height={1}
          className={className}
          alt={alt}
        />
      </Box>
      <p>{title}</p>
    </Box>
  );
}
