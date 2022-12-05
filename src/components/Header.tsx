import {
  ActionIcon,
  Header as PrimitiveHeader,
  Group,
  Container,
  ColorScheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useEffect, useState } from "react";
import { LanguagePicker } from "./LanguagePicker";

interface Props {}

export function Header({}: Props) {
  const [theme, setTheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    const { scrollY } = window;
    if (scrollY >= 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
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

  function toggleColorScheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <PrimitiveHeader
      className={
        navbar
          ? "sticky border-b-0 top-0 bg-opacity-10 dark:bg-opacity-20 bg-gray-300 dark:bg-gray-700 z-50"
          : "border-b-0 py-14 bg-transparent h-24"
      }
      height={70}
    >
      <Container
        className="flex justify-between mx-16 items-center h-full"
        fluid
      >
        <section className="dark:text-white text-black uppercase text-xl space-x-2">
          <strong>Thalis</strong>
          <strong className="dark:text-blue-700 text-blue-400">Zambarda</strong>
        </section>
        <div className="flex gap-4">
          <Group>
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
        </div>
      </Container>
    </PrimitiveHeader>
  );
}
