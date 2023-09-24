import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function CountingBits() {
  return (
    <Layout>
      <Heading>Counting Bits</Heading>
      <Text>
        Given an integer n, return an array ans of length n + 1 such that for
        each i {`(0 <= i <= n)`}, ans[i] is the number of 1's in the binary
        representation of i.
      </Text>
    </Layout>
  );
}
