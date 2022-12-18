import { useState } from "react";
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

const data = [
  { label: "English", image: "Usa-flag.png" },
  { label: "Portuguese", image: "Brazil-flag.png" },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => (
    <Menu.Item
      className="w-[12.3rem] text-white hover:dark:bg-gray-600 hover:bg-blue-400 focus:dark:bg-gray-600"
      icon={
        <Image
          src={item.image}
          width={18}
          height={18}
          alt="brazil or english flag"
        />
      }
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      transition="scale-y"
      transitionDuration={200}
      position="bottom-end"
      withArrow
    >
      <Menu.Target>
        <UnstyledButton className="flex justify-between items-center py-3 px-4 gap-2 border-solid border rounded-md xl:w-52 dark:border-gray-200 border-gray-200 transition-colors duration-300 ease-in hover:dark:bg-gray-500 hover:bg-blue-400">
          <Group>
            <Image
              src={selected.image}
              width={22}
              height={22}
              alt="flag of language selected"
            />
            <span className="font-medium text-sm text-white hidden lg:inline">
              {selected.label}
            </span>
          </Group>
          <IconChevronDown
            size={16}
            className={
              opened
                ? "rotate-180 transform duration-150 ease-in text-white"
                : "rotate-0 transform duration-150 ease-in text-white"
            }
            stroke={3}
          />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className="bg-transparent border-gray-200 dark:border-gray-200">
        {items}
      </Menu.Dropdown>
    </Menu>
  );
}
