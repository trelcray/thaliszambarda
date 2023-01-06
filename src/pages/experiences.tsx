import { Badge, Box, Text, Timeline, Title } from "@mantine/core";
import { IconBriefcase, IconSearch } from "@tabler/icons";

interface Props {}

export function Experiences({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center dark:text-white gap-5 min-h-screen">
      <Title className="lg:mt-4">Experiences</Title>
      <Timeline
        active={1}
        bulletSize={40}
        lineWidth={4}
        reverseActive
        color="cyan.4"
        className="flex flex-col mx-2 max-w-lg">
        <Timeline.Item
          lineVariant="dashed"
          title="Searching a Job"
          bullet={<IconSearch size={28} />}
          className="flex dark:text-white pb-8">
          <Text size="xs" mt={4}>
            Now
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcase size={28} />}
          className="dark:text-white pb-8"
          title="Front-End Developer"
          align="left">
          <Text color="dimmed" size="sm">
            FAPERGS
          </Text>
          <Text size="xs">ago de 2021 - ago de 2022</Text>
          <Text color="dimmed" size="xs" mt={12}>
            Mediação da aprendizagem online: novas possibilidades educativas
            apoiadas por tecnologias digitais
          </Text>
          <Box className="flex flex-wrap gap-1" mt={6}>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              JAVASCRIPT
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              REACT.JS
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              NODE.JS
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              SQL
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              HTML5
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              GIT
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              CSS3
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              Bootstrap
            </Badge>
          </Box>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcase size={28} />}
          className="dark:text-white"
          title="Front-End Developer"
          align="left">
          <Text color="dimmed" size="sm">
            FAPERGS
          </Text>
          <Text size="xs">ago de 2020 - ago de 2021</Text>
          <Text color="dimmed" size="xs" mt={12}>
            Prática educativa disruptiva: investigando possibilidades
            renovadoras dos processos de ensino e aprendizagem na educação e
            tecnologias
          </Text>
          <Box className="flex flex-wrap gap-1" mt={6}>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              JAVASCRIPT
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              REACT.JS
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              NODE.JS
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              SQL
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              HTML5
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              GIT
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              CSS3
            </Badge>
            <Badge className="dark:text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              Bootstrap
            </Badge>
          </Box>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
