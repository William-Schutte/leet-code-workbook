import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function CoinChange() {
  return (
    <Layout>
      <Heading>Coin Change</Heading>
      <Text>
        You are given an integer array coins representing coins of different
        denominations and an integer amount representing a total amount of
        money. Return the fewest number of coins that you need to make up that
        amount. If that amount of money cannot be made up by any combination of
        the coins, return -1. You may assume that you have an infinite number of
        each kind of coin.
      </Text>
    </Layout>
  );
}
