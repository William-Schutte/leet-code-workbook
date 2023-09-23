import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function ContainsDuplicate() {
  return (
    <Layout>
      <Heading>Contains Duplicate</Heading>
      <Text>
        Given an integer array nums, return true if any value appears at least
        twice in the array, and return false if every element is distinct.
      </Text>
    </Layout>
  );
}
