import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function CloneGraph() {
  return (
    <Layout>
      <Heading>Clone Graph</Heading>
      <Text>
        Given a reference of a node in a connected undirected graph. Return a
        deep copy (clone) of the graph. Each node in the graph contains a value
        (int) and a list (List[Node]) of its neighbors.
      </Text>
    </Layout>
  );
}
