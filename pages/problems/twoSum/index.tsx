import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function TwoSum() {
  return (
    <Layout>
      <Heading>Two Sum</Heading>
      <Text>
        Given an array of integers nums and an integer target, return indices of
        the two numbers such that they add up to target. You may assume that
        each input would have exactly one solution, and you may not use the same
        element twice. You can return the answer in any order.
      </Text>
    </Layout>
  );
}
