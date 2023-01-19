import { Badge, Box, Text, Timeline, Title } from "@mantine/core";
import { IconBriefcase, IconSearch } from "@tabler/icons";
import { useTranslation } from "react-i18next";

export function Experiences() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center dark:text-white gap-5 min-h-screen">
      <Title className="lg:mt-4">{t("pages.experiences")}</Title>
      <Timeline
        active={1}
        bulletSize={40}
        lineWidth={4}
        reverseActive
        color="cyan.4"
        className="flex flex-col mx-2">
        <Timeline.Item
          lineVariant="dashed"
          title={t("experience.title1")}
          bullet={
            <IconSearch size={28} className="text-white dark:text-black" />
          }
          className="flex dark:text-white pb-8">
          <Text size="xs" mt={4}>
            {t("experience.period1")}
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcase size={28} />}
          className="dark:text-white pb-8"
          title={t("experience.title2")}
          align="left">
          <Text color="dimmed" size="sm">
            FAPERGS
          </Text>
          <Text size="xs">{t("experience.period2")}</Text>
          <Text color="dimmed" size="xs" mt={12}>
            {t("experience.description2")}
          </Text>
          <Box className="flex flex-wrap gap-1" mt={6}>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              JAVASCRIPT
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              REACT.JS
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              NODE.JS
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              SQL
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              HTML5
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              GIT
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              CSS3
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              Bootstrap
            </Badge>
          </Box>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcase size={28} />}
          className="dark:text-white"
          title={t("experience.title3")}
          align="left">
          <Text color="dimmed" size="sm">
            FAPERGS
          </Text>
          <Text size="xs">{t("experience.period3")}</Text>
          <Text color="dimmed" size="xs" mt={12}>
            {t("experience.description3")}
          </Text>
          <Box className="flex flex-wrap gap-1" mt={6}>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              JAVASCRIPT
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              REACT.JS
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              NODE.JS
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              SQL
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              HTML5
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              GIT
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              CSS3
            </Badge>
            <Badge className="text-cyan-400 shadow-sm shadow-cyan-500/50 bg-transparent border border-gray-200/50">
              Bootstrap
            </Badge>
          </Box>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
