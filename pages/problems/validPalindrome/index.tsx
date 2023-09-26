import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function ValidPalindrome() {
  return (
    <Layout>
      <Heading>Valid Palindrome</Heading>
      <Text>
        A phrase is a palindrome if, after converting all uppercase letters into
        lowercase letters and removing all non-alphanumeric characters, it reads
        the same forward and backward. Alphanumeric characters include letters
        and numbers. Given a string s, return true if it is a palindrome, or
        false otherwise.
      </Text>
    </Layout>
  );
}
