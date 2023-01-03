import { Group, Text, Textarea, Title } from "@mantine/core";
import { TablerIconProps } from "@tabler/icons";
import { FunctionComponent } from "react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { contactInfo } from "../utils/data";

interface Props {}

interface IIconsProps extends TablerIconProps {
  icon: FunctionComponent;
}

function Icons({ icon, ...props }: IIconsProps) {
  const Icon = icon;
  return <Icon {...props} />;
}

export function Contact({}: Props) {
  return (
    <div className="flex flex-col gap-16 mx-5 justify-center items-center min-h-screen">
      <Title className="text-white">Contact</Title>
      <div className="flex flex-col md:flex-row justify-evenly w-full text-white">
        <div className="bg-cyan-500 rounded-xl p-6">
          <Title order={4} className="text-white">
            Contact information
          </Title>

          <div className="flex flex-col justify-center gap-4 mt-8 mb-20">
            {contactInfo?.map((info, i) => (
              <div className="flex items-center gap-4" key={i}>
                <Icons icon={info.icon}/>
                <div>
                  <Text className="text-sm">{info.title}</Text>
                  <strong className="text-base">{info.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={(event) => event.preventDefault()}>
          <Title order={4} className="text-white mt-6">
            Get in touch
          </Title>

          <div className="flex flex-col gap-3 w-full md:min-w-[20rem] mt-10">
            <TextInput label="Your email" placeholder="johndoe@gmail.com" />
            <TextInput label="Subject" placeholder="subject" />

            <Textarea
              label="Your message"
              placeholder="Please include all relevant information"
              className="[&>div>textarea]:w-full [&>div>textarea]:bg-gray-800 [&>div>textarea]:border [&>div>textarea]:border-gray-800 hover:[&>div>textarea]:border-cyan-400 focus:[&>div>textarea]:border-cyan-400 [&>div>textarea]:outline-none [&>div>textarea]:rounded [&>div>textarea]:p-2 text-white [&>label>span]:text-red-500"
              unstyled
              minRows={3}
              required
            />

            <Group position="right">
              <Button type="submit">Send message</Button>
            </Group>
          </div>
        </form>
      </div>
    </div>
  );
}
