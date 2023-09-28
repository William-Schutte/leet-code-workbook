import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function RansomNote() {
  return (
    <Layout>
      <Heading>Ransom Note</Heading>
      <Text>
        Given two strings ransomNote and magazine, return true if ransomNote can
        be constructed by using the letters from magazine and false otherwise.
        Each letter in magazine can only be used once in ransomNote.
      </Text>
    </Layout>
  );
}
