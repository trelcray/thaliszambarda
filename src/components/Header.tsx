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
import { useLocalStorage } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { FormEvent, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IHeaderProps } from "../@types/global";
import { data } from "../utils/data";
import { LanguagePicker } from "./LanguagePicker";

export const Header = memo(({ inView }: IHeaderProps) => {
  const [theme, setTheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const [navbar, setNavbar] = useState(false);
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);

  const { t } = useTranslation();

  const handleClick = (link: string, e: FormEvent, index: number) => {
    e.preventDefault();
    const href = document.getElementById(link);
    href?.scrollIntoView({ behavior: "smooth" });
    setActive(index);
  };

  const items = data.map((item, index) => (
    <Anchor<"a">
      key={index}
      variant="text"
      className={
        index === active
          ? "group uppercase text-cyan-400 font-semibold transition-all duration-300 ease-in-out"
          : "group uppercase dark:text-white transition-all duration-300 ease-in-out"
      }
      onClick={(e) => handleClick(item.link, e, index)}>
      <span className="bg-left-bottom pb-2 bg-gradient-to-r from-cyan-400 to-white dark:from-cyan-400 dark:to-gray-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {t(item.label)}
      </span>
    </Anchor>
  ));

  const changeBackground = () => {
    const { scrollY } = window;
    if (scrollY >= 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Refactor toggle color scheme logic into separate function
  function toggleColorScheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const HandleChangeTheme = () => {
    toggleColorScheme();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    setActive(inView);
  }, [active, inView]);

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
          ? "sticky border-0 top-0 bg-opacity-90 dark:bg-opacity-20 dark:hover:bg-opacity-90 border-b dark:border-gray-800 bg-white dark:bg-gray-700 z-50"
          : "border-b-0 py-14 bg-transparent h-24"
      }
      height={70}>
      <Container
        className="flex justify-between mx-2 lg:mx-2 items-center h-full"
        fluid>
        <section className="dark:text-white uppercase text-xl space-x-2">
          <Title className="text-2xl xl:text-4xl">
            Thalis <span className="text-cyan-400">Zambarda</span>
          </Title>
        </section>
        <Group className="xl:gap-6 hidden lg:flex">{items}</Group>
        <div className="flex gap-4 items-center">
          <Group className="hidden lg:flex">
            <ActionIcon
              variant="outline"
              className="rounded-full border-gray-500 hover:bg-gray-900 dark:hover:bg-gray-200 dark:border-gray-300 dark:text-yellow-500 text-cyan-500"
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme">
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
            onClose={() => setOpened(false)}>
            <Menu.Target>
              <Burger
                className={
                  opened
                    ? "lg:hidden dark:[&>.mantine-Burger-burger]:bg-transparent dark:before:[&>.mantine-Burger-burger]:bg-white dark:after:[&>.mantine-Burger-burger]:bg-white"
                    : "lg:hidden dark:[&>.mantine-Burger-burger]:bg-white dark:before:[&>.mantine-Burger-burger]:bg-white dark:after:[&>.mantine-Burger-burger]:bg-white"
                }
                opened={opened}
              />
            </Menu.Target>

            <Menu.Dropdown className="[&>div.mantine-Menu-arrow]:border-gray-500 lg:hidden border-gray-500 dark:border-white dark:bg-gray-700">
              <Menu.Label>Navigation</Menu.Label>

              {data.map((item, index) => (
                <Menu.Item
                  key={index}
                  className="focus:bg-gray-200 hover:bg-gray-200 focus:dark:bg-gray-500 hover:dark:bg-gray-500 transition-colors duration-300 ease-in"
                  onClick={(e: FormEvent) => handleClick(item.link, e, index)}>
                  <Anchor<"a">
                    key={index}
                    variant="text"
                    className={
                      index === active
                        ? "text-cyan-400"
                        : "text-gray-700 dark:text-white"
                    }>
                    {t(item.label)}
                  </Anchor>
                </Menu.Item>
              ))}

              <Menu.Divider />

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                className=" dark:text-white hover:bg-gray-200 focus:bg-sky-200 dark:dark: focus:dark:bg-gray-500 hover:dark:bg-gray-500 transition-colors duration-300 ease-in"
                onClick={HandleChangeTheme}
                icon={
                  theme === "dark" ? (
                    <IconSun className="border rounded-full border-gray-300 h-6 w-6 p-1 text-yellow-500" />
                  ) : (
                    <IconMoonStars className="border rounded-full border-gray-300 h-6 w-6 p-1 text-cyan-500" />
                  )
                }>
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </PrimitiveHeader>
  );
});

Header.displayName = "Header";
