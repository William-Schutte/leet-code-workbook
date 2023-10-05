import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function NumberOfIslands() {
  return (
    <Layout>
      <Heading>Number Of Islands</Heading>
      <Text>
        Given an m x n 2D binary grid grid which represents a map of '1's (land)
        and '0's (water), return the number of islands. An island is surrounded
        by water and is formed by connecting adjacent lands horizontally or
        vertically. You may assume all four edges of the grid are all surrounded
        by water.
      </Text>
    </Layout>
  );
}
