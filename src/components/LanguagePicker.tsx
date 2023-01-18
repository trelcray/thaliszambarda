import { useState } from "react";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { changeLanguage } from "i18next";
import { language } from "../utils/data";
import { useTranslation } from "react-i18next";

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(language[0]);

  const { t } = useTranslation();

  const items = language.map((item) => (
    <Menu.Item
      className="w-[12.3rem] dark:text-white hover:dark:bg-gray-600 hover:bg-gray-200 focus:dark:bg-gray-600"
      icon={
        <Image
          src={item.image}
          width={18}
          height={18}
          alt="brazil or english flag"
        />
      }
      onClick={() => {
        setSelected(item), changeLanguage(item.lng);
      }}
      key={item.label}>
      {t(item.label)}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      transition="scale-y"
      transitionDuration={200}
      position="bottom-end"
      withArrow>
      <Menu.Target>
        <UnstyledButton className="flex justify-between items-center py-3 px-4 gap-2 border-solid border rounded-md xl:w-52 dark:border-gray-200 border-gray-500 transition-colors duration-300 ease-in hover:dark:bg-gray-500 hover:bg-gray-200">
          <Group>
            <Image
              src={selected.image}
              width={22}
              height={22}
              alt="flag of language selected"
            />
            <span className="font-medium text-sm dark:text-white hidden lg:inline">
              {t(selected.label)}
            </span>
          </Group>
          <IconChevronDown
            size={16}
            className={
              opened
                ? "rotate-180 transform duration-150 ease-in dark:text-white"
                : "rotate-0 transform duration-150 ease-in dark:text-white"
            }
            stroke={3}
          />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className="bg-white dark:bg-transparent [&>div.mantine-Menu-arrow]:border-gray-500 dark:[&>div.mantine-Menu-arrow]:border-gray-200 border-gray-500 dark:border-gray-200">
        {items}
      </Menu.Dropdown>
    </Menu>
  );
}
