import { Heading, Text } from "@chakra-ui/react";
import Layout from "../layout";

export default function JavaScriptTrivia() {
  return (
    <Layout>
      <Heading>Explain Event Delegation</Heading>
      <Text>
        Events can be triggered on the page by many actions, like a mouse click,
        keyboard press, or some other user interaction. When an event occurs, it
        happens on the uppermost element or focused element, and propogates up
        the dom to parent elements. If desired, this behavior can be blocked
        with event.stopPropogation(). Else, the event will "bubble up" to other
        elements. This can be beneficial: instead of placing an event listener
        on each line of a table, you can delegate one listener on the table that
        will handle events of the children.
      </Text>
    </Layout>
  );
}
