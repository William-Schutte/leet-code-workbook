import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function TimeBasedKeyValueStore() {
  return (
    <Layout>
      <Heading>Time Based Key Value Store</Heading>
      <Text>
        Design a time-based key-value data structure that can store multiple
        values for the same key at different time stamps and retrieve the key's
        value at a certain timestamp. Implement the TimeMap class: TimeMap
        Initializes the object of the data structure. $
        {`void set(String key, String value, int timestamp)`} Stores the key key
        with the value value at the given time timestamp. String $
        {`get(String key, int timestamp)`} Returns a value such that set was
        called previously, with timestamp_prev lte timestamp. If there are
        multiple such values, it returns the value associated with the largest
        timestamp_prev. If there are no values, it returns "".Given a string s
        and a dictionary of strings wordDict, return true if s can be segmented
        into a space-separated sequence of one or more dictionary words. Note
        that the same word in the dictionary may be reused multiple times in the
        segmentation.```
      </Text>
    </Layout>
  );
}
