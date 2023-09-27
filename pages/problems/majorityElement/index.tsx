import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function MajorityElement() {
  return (
    <Layout>
      <Heading>Majority Element</Heading>
      <Text>
        Given an array nums of size n, return the majority element. The majority
        element is the element that appears more than ⌊n / 2⌋ times. You may
        assume that the majority element always exists in the array.
      </Text>
    </Layout>
  );
}
