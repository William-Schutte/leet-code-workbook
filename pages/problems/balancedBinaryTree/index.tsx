import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";
import CodeDisplay from "@/components/CodeDisplay";

export default function BalancedBinaryTree() {
  return (
    <Layout>
      <Heading py="4">Balanced Binary Tree</Heading>
      <Text>Given a binary tree, determine if it is height-balanced.</Text>
      <CodeDisplay src="/balancedBinaryTree.js" />
    </Layout>
  );
}
