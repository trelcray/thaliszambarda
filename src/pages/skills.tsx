import { Grid, Tabs, Title } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons";

interface Props {}

export function Skills({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-16 min-h-screen">
      <Title>Skills</Title>
      <Tabs variant="outline" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
            <Grid grow>
              <Grid.Col span="auto">1</Grid.Col>
              <Grid.Col span="auto">2</Grid.Col>
              <Grid.Col span="auto">3</Grid.Col>
              <Grid.Col span="auto">4</Grid.Col>
              <Grid.Col span="auto">5</Grid.Col>
            </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs" className="w-full h-full">
          <Grid grow>
            <Grid.Col span="auto">1</Grid.Col>
            <Grid.Col span="auto">2</Grid.Col>
            <Grid.Col span="auto">3</Grid.Col>
            <Grid.Col span="auto">4</Grid.Col>
            <Grid.Col span="auto">5</Grid.Col>
          </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
