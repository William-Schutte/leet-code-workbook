import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function MergeIntervals() {
  return (
    <Layout>
      <Heading>Merge Intervals</Heading>
      <Text>
        Given an array of intervals where intervals[i] = [starti, endi], merge
        all overlapping intervals, and return an array of the non-overlapping
        intervals that cover all the intervals in the input.
      </Text>
    </Layout>
  );
}
