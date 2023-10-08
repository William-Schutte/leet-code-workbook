import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function LowestCommonAncestor2() {
  return (
    <Layout>
      <Heading>Lowest Common Ancestor of a Binary Tree</Heading>
      <Text>
        Given a binary tree, find the lowest common ancestor (LCA) of two given
        nodes in the tree. According to the definition of LCA on Wikipedia: “The
        lowest common ancestor is defined between two nodes p and q as the
        lowest node in T that has both p and q as descendants (where we allow a
        node to be a descendant of itself).”
      </Text>
    </Layout>
  );
}
