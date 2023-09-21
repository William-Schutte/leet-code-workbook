import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function MaxProfit() {
  return (
    <Layout>
      <Heading>Insert Interval</Heading>
      <Text>
        You are given an array of non-overlapping intervals intervals where
        intervals[i] = [starti, endi] represent the start and the end of the ith
        interval and intervals is sorted in ascending order by starti. You are
        also given an interval newInterval = [start, end] that represents the
        start and end of another interval. Insert newInterval into intervals
        such that intervals is still sorted in ascending order by starti and
        intervals still does not have any overlapping intervals (merge
        overlapping intervals if necessary). Return intervals after the
        insertion.
      </Text>
    </Layout>
  );
}
