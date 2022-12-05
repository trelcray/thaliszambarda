import { MantineProvider } from '@mantine/core';

import Home from './index';
import "../styles/globals.css"

export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Home/>
    </MantineProvider>
  );
}