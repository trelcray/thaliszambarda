import { Badge, Box, Text, Timeline, Title } from "@mantine/core";
import {
  IconBriefcase,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
  IconNetwork,
  IconSearch,
} from "@tabler/icons";

interface Props {}

export function Experiences({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-16 min-h-screen">
      <Title>Experiences</Title>
      <Timeline
        active={1}
        bulletSize={40}
        lineWidth={4}
        reverseActive
        color="indigo"
      >
        <Timeline.Item
          lineVariant="dashed"
          title="Searching a Job"
          bullet={<IconSearch size={28} />}
          className="text-white pb-8"
        >
          <Text size="xs" mt={4}>
            Now
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcase size={28} />}
          className="text-white pb-8"
          title="Front-End Developer"
          align="left"
        >
          <Text color="dimmed" size="sm">
            FAPERGS
          </Text>
          <Text size="xs">ago de 2021 - ago de 2022</Text>
          <Text color="dimmed" size="xs" mt={12}>
            Mediação da aprendizagem online: novas possibilidades educativas
            apoiadas por tecnologias digitais
          </Text>
          <Box className="flex gap-1" mt={6}>
            <Badge>JAVASCRIPT</Badge>
            <Badge>REACT.JS</Badge>
            <Badge>NODE.JS</Badge>
            <Badge>SQL</Badge>
            <Badge>HTML5</Badge>
            <Badge>GIT</Badge>
            <Badge>CSS3</Badge>
            <Badge>Bootstrap</Badge>
          </Box>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcase size={28} />}
          className="text-white"
          title="Front-End Developer"
          align="left"
        >
          <Text color="dimmed" size="sm">
            FAPERGS
          </Text>
          <Text size="xs">ago de 2020 - ago de 2021</Text>
          <Text color="dimmed" size="xs" mt={12}>
            Prática educativa disruptiva: investigando possibilidades
            renovadoras dos processos de ensino e aprendizagem na educação e
            tecnologias
          </Text>
          <Box className="flex gap-1" mt={6}>
            <Badge>JAVASCRIPT</Badge>
            <Badge>REACT.JS</Badge>
            <Badge>NODE.JS</Badge>
            <Badge>SQL</Badge>
            <Badge>HTML5</Badge>
            <Badge>GIT</Badge>
            <Badge>CSS3</Badge>
            <Badge>Bootstrap</Badge>
          </Box>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
