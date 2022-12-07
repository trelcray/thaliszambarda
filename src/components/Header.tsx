import {
  ActionIcon,
  Header as PrimitiveHeader,
  Group,
  Container,
  ColorScheme,
  Burger,
  Menu,
  Anchor,
  Title,
} from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useEffect, useState } from "react";
import { LanguagePicker } from "./LanguagePicker";

interface Props {}

const data = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Experiences", link: "#experiences" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

export function Header({}: Props) {
  const [theme, setTheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const [navbar, setNavbar] = useState(false);
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={index}
      variant="text"
      className={
        index === active
          ? "group uppercase text-blue-400 dark:text-blue-500 transition-all duration-300 ease-in-out"
          : "group uppercase text-gray-700 dark:text-white transition-all duration-300 ease-in-out"
      }
      onClick={() => {
        setActive(index);
      }}
    >
      <span className="bg-left-bottom pb-2 bg-gradient-to-r from-blue-400 to-white dark:from-blue-500 dark:to-gray-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {item.label}
      </span>
    </Anchor>
  ));

  const changeBackground = () => {
    const { scrollY } = window;
    if (scrollY >= 25) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  function toggleColorScheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const HandleChangeTheme = () => {
    setOpened(false);
    toggleColorScheme();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <PrimitiveHeader
      className={
        navbar
          ? "sticky border-0 top-0 bg-opacity-20 dark:bg-opacity-20 bg-teal-300 dark:bg-gray-700 z-50"
          : "border-b-0 py-14 bg-transparent h-24"
      }
      height={70}
    >
      <Container
        className="flex justify-between mx-2 lg:mx-2 items-center h-full"
        fluid
      >
        <section className="dark:text-white text-gray-700 uppercase text-xl space-x-2">
          <Title className="text-2xl xl:text-4xl">
            Thalis{" "}
            <span className="dark:text-blue-700 text-blue-400">Zambarda</span>
          </Title>
        </section>
        <Group className="xl:gap-6 hidden lg:flex">{items}</Group>
        <div className="flex gap-4 items-center">
          <Group className="hidden lg:flex">
            <ActionIcon
              variant="outline"
              className="rounded-full dark:text-yellow-500 text-blue-500"
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {theme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoonStars size={18} />
              )}
            </ActionIcon>
          </Group>
          <Group>
            <LanguagePicker />
          </Group>
          <Menu
            transition="scale-y"
            transitionDuration={200}
            position="bottom-end"
            withArrow
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
          >
            <Menu.Target>
              <Burger
                className="lg:hidden"
                color={theme === "dark" ? "white" : "black"}
                opened={opened}
                onClick={() => setOpened(false)}
              />
            </Menu.Target>

            <Menu.Dropdown className="lg:hidden bg-teal-100/95 dark:bg-gray-700">
              <Menu.Label>Navigation</Menu.Label>

              {data.map((item, index) => (
                <Menu.Item
                  key={index}
                  onClick={() => setOpened(false)}
                  className="focus:bg-teal-200 hover:bg-teal-200 dark:text-white focus:dark:bg-gray-500 hover:dark:bg-gray-500 transition-colors duration-300 ease-in"
                >
                  <Anchor<"a">
                    href={item.link}
                    key={index}
                    variant="text"
                    className={
                      index === active
                        ? "text-blue-400 dark:text-blue-500"
                        : "text-gray-700 dark:text-white"
                    }
                    onClick={() => {
                      setActive(index);
                    }}
                  >
                    {item.label}
                  </Anchor>
                </Menu.Item>
              ))}

              <Menu.Divider />

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                className="hover:bg-teal-200 focus:bg-teal-200 dark:text-white focus:dark:bg-gray-500 hover:dark:bg-gray-500 transition-colors duration-300 ease-in"
                onClick={HandleChangeTheme}
                icon={
                  theme === "dark" ? (
                    <IconSun className="border rounded-full border-gray-300 h-6 w-6 p-1 text-yellow-500" />
                  ) : (
                    <IconMoonStars className="border rounded-full border-gray-300 h-6 w-6 p-1 text-blue-500" />
                  )
                }
              >
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </PrimitiveHeader>
  );
}
