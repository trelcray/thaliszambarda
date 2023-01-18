import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import Index from "./index";
import { i18n } from "../i18n";
import { I18nextProvider } from "react-i18next";

export default function App() {
  return (
      <I18nextProvider i18n={i18n}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Index />
        </MantineProvider>
      </I18nextProvider>
  );
}
