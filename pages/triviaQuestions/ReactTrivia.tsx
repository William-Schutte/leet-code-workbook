import { Heading, Text } from "@chakra-ui/react";
import Layout from "../layout";

export default function JavaScriptTrivia() {
  return (
    <Layout>
      <Heading>What are the Pros and Cons of React</Heading>
      <Text>
        React is not technically a framework, but actually a library. Frameworks
        like Angular provide more built in functionality from the start. With
        React, there is no default router, no default API layer, no large scale
        data management system, etc. That being said, React has many additional
        libraries and packages that can specifically extend it's functionality
        depending on the use case.
      </Text>
      <Heading>What makes React so powerful?</Heading>
      <Text>
        React's virtual DOM is the major distinguishing factor with React. The
        virtual DOM is a lightweight JS representation of the DOM (Document
        Object Model). To render to the page, we must create DOM nodes inside
        the DOM tree. With React, we don't have to worry about direction
        accessing or modifying the DOM. React converts components into the
        virtual DOM, a huge JS object that represents the real DOM. Component
        changes first check for differences in the virtual DOM. Only if changes
        to the virtual DOM are detected does React then interact with the real
        DOM.
      </Text>
      <Heading>What is a Shadow DOM</Heading>
      <Text>
        A shadow DOM is not a React-related topic and can exist without React
        entirely. A shadow DOM is a nested DOM that allows embedding of DOM
        trees within another DOM. This can be used to embed a widget, or an
        entirely separate webpage within another page. The shadow DOM (the
        internal page) will have its own environment completely detached from
        the parent DOM. It can use its own JS, CSS, varaibles, etc.
      </Text>
      <Heading>What is JSX</Heading>
      <Text>
        JSX is a markup language that allows writing of "HTML" within JavaScript
        files. Syntax of JSX is identitcal to JS, but allows for writing of
        components. While JSX is typically associated with React, they are not
        the same, and one does not necessitate the other. JSX is simply a
        language that makes using React simpler.
      </Text>
    </Layout>
  );
}
