import {
  ActionIcon,
  Anchor,
  Group,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  TablerIconProps,
} from "@tabler/icons";
import { FormEvent, FunctionComponent, useRef } from "react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { contactInfo } from "../utils/data";
import emailjs from "@emailjs/browser";

interface Props {}

interface IIconsProps extends TablerIconProps {
  icon: FunctionComponent;
}

export function Contact({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  function Icons({ icon, ...props }: IIconsProps) {
    const Icon = icon;
    return <Icon {...props} />;
  }

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const formElement = form.current;
    if (formElement) {
      emailjs
        .sendForm(
          "portfolioService",
          "template_tk9njtj",
          formElement,
          "Z0gJP5BI08pXxXmXE"
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };
  return (
    <div className="flex flex-col gap-5 mx-5 justify-center items-center min-h-screen">
      <Title className="text-white lg:mt-16">Contact</Title>
      <div className="flex flex-col md:flex-row justify-evenly w-full text-white">
        <div className="bg-cyan-500 rounded-xl p-6">
          <Title order={4} className="text-white">
            Contact information
          </Title>

          <div className="flex flex-col justify-center gap-4 mt-8 mb-20">
            {contactInfo?.map((info, i) => (
              <div className="flex items-center gap-4" key={i}>
                <Icons icon={info.icon} />
                <div>
                  <Text className="text-sm">{info.title}</Text>
                  <strong className="text-base">{info.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form ref={form} method="post" onSubmit={handleSendEmail}>
          <Title order={4} className="text-white mt-6">
            Get in touch
          </Title>

          <div className="flex flex-col gap-3 w-full md:min-w-[25rem] mt-10">
            <TextInput
              label="Your email"
              placeholder="johndoe@gmail.com"
              name="email"
              type="email"
            />
            <TextInput label="Subject" placeholder="subject" name="subject" />

            <Textarea
              label="Your message"
              placeholder="Please include all relevant information"
              className="[&>div>textarea]:w-full [&>div>textarea]:bg-gray-800 [&>div>textarea]:border [&>div>textarea]:border-gray-800 hover:[&>div>textarea]:border-cyan-400 focus:[&>div>textarea]:border-cyan-400 [&>div>textarea]:outline-none [&>div>textarea]:rounded [&>div>textarea]:px-2 [&>div>textarea]:pb-10  text-white [&>label>span]:text-red-500"
              unstyled
              name="message"
              minRows={3}
              required
            />
            <Group position="right">
              <Button type="submit">Send message</Button>
            </Group>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center w-full border-t border-gray-500 py-8 gap-8">
        <Group spacing="xs" position="right" noWrap>
          <Anchor
            href="https://www.linkedin.com/in/thalis-zambarda"
            target="_blank">
            <ActionIcon
              className="bg-transparent hover:bg-gray-800 border-gray-500"
              size="lg"
              variant="default"
              radius="xl">
              <IconBrandLinkedin color="white" size={24} stroke={1.5} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href="https://github.com/trelcray"
            target="_blank">
            <ActionIcon
              className="bg-transparent hover:bg-gray-800 border-gray-500"
              size="lg"
              variant="default"
              radius="xl">
              <IconBrandGithub color="white" size={24} stroke={1.5} />
            </ActionIcon>
          </Anchor>

          <Anchor
            href="https://www.instagram.com/thaliszambarda"
            target="_blank">
            <ActionIcon
              className="bg-transparent hover:bg-gray-800 border-gray-500"
              size="lg"
              variant="default"
              radius="xl">
              <IconBrandInstagram color="white" size={24} stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Group>
        <Text color="dimmed" size="sm">
          © 2023 Thalis Zambarda. All rights reserved.
        </Text>
      </div>
    </div>
  );
}
