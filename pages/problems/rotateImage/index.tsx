import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function MaxProfit() {
  return (
    <Layout>
      <Heading>Rotate Image</Heading>
      <Text>
        You are given an n x n 2D matrix representing an image, rotate the image
        by 90 degrees (clockwise). You have to rotate the image in-place, which
        means you have to modify the input 2D matrix directly. DO NOT allocate
        another 2D matrix and do the rotation.
      </Text>
    </Layout>
  );
}