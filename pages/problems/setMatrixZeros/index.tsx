import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function SetMatrixZeros() {
  return (
    <Layout>
      <Heading>Set Matrix Zeros</Heading>
      <Text>
        Given an m x n integer matrix matrix, if an element is 0, set its entire
        row and column to 0's. You must do it in place.
      </Text>
    </Layout>
  );
}
