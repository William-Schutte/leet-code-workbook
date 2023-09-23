import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function ClimbingStairs() {
  return (
    <Layout>
      <Heading>Climbing Stairs</Heading>
      <Text>
        You are climbing a staircase. It takes n steps to reach the top. Each
        time you can either climb 1 or 2 steps. In how many distinct ways can
        you climb to the top?
      </Text>
    </Layout>
  );
}
