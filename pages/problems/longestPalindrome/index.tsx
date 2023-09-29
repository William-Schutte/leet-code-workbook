import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function RansomNote() {
  return (
    <Layout>
      <Heading>Longest Palindrome</Heading>
      <Text>
        Given a string s which consists of lowercase or uppercase letters,
        return the length of the longest palindrome that can be built with those
        letters. Letters are case sensitive, for example, "Aa" is not considered
        a palindrome here.
      </Text>
    </Layout>
  );
}
