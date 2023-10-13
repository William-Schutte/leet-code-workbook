import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";
import CodeDisplay from "@/components/CodeDisplay";

export default function SpiralMatrix() {
  return (
    <Layout>
      <Heading my="4">Spiral Matrix</Heading>
      <Text>
        Given an m x n matrix, return all elements of the matrix in spiral
        order.
      </Text>
      <CodeDisplay src="/spiralMatrix.js" />
    </Layout>
  );
}
