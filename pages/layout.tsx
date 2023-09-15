import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex w="100vw" h="100vh" py="10" px="40" flexDir="column">
      <Flex bg="red" justifyContent="space-between">
        <Text>NAV BAR</Text>
        <Link href="/">Home</Link>
      </Flex>
      <Box>{children}</Box>
    </Flex>
  );
}
