import { MantineProvider } from '@mantine/core';
import "../styles/globals.css"
import Index from './index';

export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Index/>
    </MantineProvider>
  );
}