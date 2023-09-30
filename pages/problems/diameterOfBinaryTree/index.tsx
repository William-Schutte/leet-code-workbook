import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function DiameterOfBinaryTree() {
  return (
    <Layout>
      <Heading>Diameter Of Binary Tree</Heading>
      <Text>
        Given the root of a binary tree, return the length of the diameter of
        the tree. The diameter of a binary tree is the length of the longest
        path between any two nodes in a tree. This path may or may not pass
        through the root. The length of a path between two nodes is represented
        by the number of edges between them.
      </Text>
    </Layout>
  );
}
