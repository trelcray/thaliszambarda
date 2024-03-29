import {
  ActionIcon,
  Anchor,
  Group,
  Notification,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCheck,
  IconX,
} from "@tabler/icons";
import { FormEvent, useRef, useState } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../utils/data";
import { useTranslation } from "react-i18next";
import { IIconsProps } from "../@types/global";

export function Contact() {
  const [isHiddenSuccess, setIsHiddenSuccess] = useState(true);
  const [isHiddenError, setIsHiddenError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);

  function Icons({ icon, ...props }: IIconsProps) {
    const Icon = icon;
    return <Icon {...props} />;
  }

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
          () => {
            setIsHiddenSuccess(false);
            setTimeout(() => {
              setIsHiddenSuccess(true);
            }, 3000);
            setIsLoading(false);
            formElement.reset();
          },
          () => {
            setIsHiddenError(false);
            setTimeout(() => {
              setIsHiddenError(true);
            }, 3000);
            setIsLoading(false);
            formElement.reset();
          }
        );
    }
  };
  return (
    <div className="relative flex flex-col gap-5 mx-5 justify-center items-center min-h-screen">
      <Title className="dark:text-white lg:mt-16">{t("pages.contact")}</Title>
      <div className="flex flex-col md:flex-row justify-evenly w-full text-white">
        <div className="flex justify-center items-center flex-col bg-cyan-500 rounded-xl p-6">
          <Title order={4} className="text-white">
            {t("contactInfo.contact")}
          </Title>

          <div className="flex flex-col justify-center gap-4 mt-8 mb-20">
            {contactInfo?.map((info, i) => (
              <div className="flex items-center gap-4" key={i}>
                <Icons icon={info.icon} />
                <div>
                  <Text className="text-sm">{t(info.title)}</Text>
                  <strong className="text-base">{t(info.value)}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form ref={form} method="post" onSubmit={handleSendEmail}>
          <Title order={4} className="text-black dark:text-white mt-6">
            {t("contactInfo.title")}
          </Title>

          <div className="flex flex-col gap-3 w-full md:min-w-[25rem] mt-10">
            <TextInput
              label={t("contactInfo.labelEmail")}
              placeholder="johndoe@gmail.com"
              name="email"
              type="email"
              className="[&>label]:text-black dark:[&>label]:text-white"
            />
            <TextInput
              label={t("contactInfo.labelSubject")}
              placeholder={t("contactInfo.labelSubject") || ""}
              name="subject"
              className="[&>label]:text-black dark:[&>label]:text-white"
            />

            <Textarea
              label={t("contactInfo.labelMessage")}
              placeholder={t("contactInfo.placeholderMessage") || ""}
              className="[&>div>textarea]:w-full [&>div>textarea]:bg-gray-800 [&>div>textarea]:border [&>div>textarea]:border-gray-800 hover:[&>div>textarea]:border-cyan-400 focus:[&>div>textarea]:border-cyan-400 [&>div>textarea]:outline-none [&>div>textarea]:rounded [&>div>textarea]:px-2 [&>div>textarea]:pb-10  dark:text-white [&>label]:text-black dark:[&>label]:text-white [&>label>span]:text-red-500"
              unstyled
              name="message"
              minRows={3}
              required
            />
            <Group position="right">
              <Button type="submit" loading={isLoading}>
                {t("contactInfo.submit")}
              </Button>
            </Group>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center w-full border-t border-gray-600 dark:border-gray-500 py-8 gap-8">
        <Group spacing="xs" position="right" noWrap>
          <Anchor
            href="https://www.linkedin.com/in/thalis-zambarda"
            target="_blank">
            <ActionIcon
              className="bg-gray-900 hover:bg-gray-800 border-gray-500"
              size="lg"
              variant="default"
              radius="xl">
              <IconBrandLinkedin color="white" size={24} stroke={1.5} />
            </ActionIcon>
          </Anchor>
          <Anchor href="https://github.com/trelcray" target="_blank">
            <ActionIcon
              className="bg-gray-900 hover:bg-gray-800 border-gray-500"
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
              className="bg-gray-900 hover:bg-gray-800 border-gray-500"
              size="lg"
              variant="default"
              radius="xl">
              <IconBrandInstagram color="white" size={24} stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Group>
        <Text className="text-gray-600 dark:text-gray-400" size="sm">
          © 2023 Thalis Zambarda. {t("contactInfo.footer")}
        </Text>
      </div>
      <Notification
        hidden={isHiddenSuccess}
        className="absolute right-0 lg:right-2 bottom-2/5 lg:bottom-auto lg:top-24 [&>div>div.mantine-Text-root]:mt-1"
        icon={<IconCheck size={20} />}
        onClose={() => setIsHiddenSuccess(true)}
        color="teal"
        title="Successfully Sent"
      />

      <Notification
        hidden={isHiddenError}
        className="absolute right-0 lg:right-2 bottom-2/5 lg:bottom-auto lg:top-24 [&>div>div.mantine-Text-root]:mt-1"
        icon={<IconX size={20} />}
        onClose={() => setIsHiddenError(true)}
        color="red"
        title="Error Sending"
      />
    </div>
  );
}
