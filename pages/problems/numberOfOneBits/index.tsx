import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function NumberOfOneBits() {
  return (
    <Layout>
      <Heading>Number of 1 Bits</Heading>
      <Text>
        Write a function that takes the binary representation of an unsigned
        integer and returns the number of '1' bits it has (also known as the
        Hamming weight).
      </Text>
    </Layout>
  );
}
