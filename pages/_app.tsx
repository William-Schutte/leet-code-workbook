import { ChakraProvider, Text } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/night-owl.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
