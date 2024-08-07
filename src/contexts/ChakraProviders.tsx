"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,

  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "black", // Or any other color from the Chakra UI theme or custom palette
        color: "white", // This sets the default text color
      },
    },
  },
  colors: {
    brand: {
      // custom color palette for grandiflores
    },
  },
  components: {},
});

function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: "top-right" } }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default ChakraProviders;
