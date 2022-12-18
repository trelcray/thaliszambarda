import { Box } from "@mantine/core";
import Image from "next/image";

interface ISkillCardProps {
  skillImage: string;
  className: string;
  alt: string;
  title: string;
}

export function SkillCard({alt, className, skillImage, title}: ISkillCardProps) {
  return (
    <Box
      className="flex flex-col shadow-lg shadow-gray-800/50 rounded border border-gray-400/50 w-24 h-22 items-center">
      <Image
        src={skillImage}
        width={1}
        height={1}
        className={className}
        alt={alt}
      />
      <p>{title}</p>
    </Box>
  );
}
