import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function ProductOfArrayExceptSelf() {
  return (
    <Layout>
      <Heading>Product of Array Except Self</Heading>
      <Text>
        Given an integer array nums, return an array answer such that answer[i]
        is equal to the product of all the elements of nums except nums[i]. The
        product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
        integer. You must write an algorithm that runs in O(n) time and without
        using the division operation.
      </Text>
    </Layout>
  );
}
