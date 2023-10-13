import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";
import CodeDisplay from "@/components/CodeDisplay";

export default function AddBinary() {
  return (
    <Layout>
      <Heading my="4">Add Binary</Heading>
      <Text>
        Given two binary strings a and b, return their sum as a binary string.
      </Text>
      <CodeDisplay src="/addBinary.js" />
    </Layout>
  );
}
