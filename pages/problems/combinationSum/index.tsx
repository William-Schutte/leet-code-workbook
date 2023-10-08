import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function CombinationSum() {
  return (
    <Layout>
      <Heading>Combination Sum</Heading>
      <Text>
        Given an array of distinct integers candidates and a target integer
        target, return a list of all unique combinations of candidates where the
        chosen numbers sum to target. You may return the combinations in any
        order. The same number may be chosen from candidates an unlimited number
        of times. Two combinations are unique if the frequency of at least one
        of the chosen numbers is different. The test cases are generated such
        that the number of unique combinations that sum up to target is less
        than 150 combinations for the given input.
      </Text>
    </Layout>
  );
}