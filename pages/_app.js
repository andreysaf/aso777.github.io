import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import '../styles/globals.css';

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
