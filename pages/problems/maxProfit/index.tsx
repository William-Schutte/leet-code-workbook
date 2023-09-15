import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function MaxProfit() {
  return (
    <Layout>
      <Heading>Best Time to Buy and Sell Stock</Heading>
      <Text>
        You are given an array prices where prices[i] is the price of a given
        stock on the ith day. You want to maximize your profit by choosing a
        single day to buy one stock and choosing a different day in the future
        to sell that stock. Return the maximum profit you can achieve from this
        transaction. If you cannot achieve any profit, return 0.
      </Text>
    </Layout>
  );
}
