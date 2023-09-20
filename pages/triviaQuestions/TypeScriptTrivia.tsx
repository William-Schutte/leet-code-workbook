import { Heading, Text } from "@chakra-ui/react";
import Layout from "../layout";

export default function JavaScriptTrivia() {
  return (
    <Layout>
      <Heading>What are the Primitive Types in TS</Heading>
      <Text>
        The primitive types are base variable types for strings, numbers, and
        booleans. These primitives can be combined in arrays, enums, interfaces,
        and types to create more specific user-defined types.
      </Text>
      <Heading>How do we declare Arrays in TS</Heading>
      <Text>
        The simplest way to type an array is to declare it as a list of the
        element it contains: {"myArray: number[] = [...]"}. Alternatively, you
        can use the Array type: {"myArray: Array<number> = [...]"}
      </Text>
      <Heading>What is the difference between any and unknown?</Heading>
      <Text>
        The type "any" can represent any type, and is used when we don't know
        the shape or type that a variable will take. It is essentially a way to
        avoid TS. The type "unknown" is a typesafe version of "any". In other
        words, you cannot use or assign a variable of type unknown to a typed
        variable. It's type must be asserted first.
        {"cool: any = api.response(); const result:string = cool"}
        {"cool: unknown = api.response(); const result:string = cool as string"}
      </Text>
      <Heading>How do Enums work in TS?</Heading>
      <Text>
        Enums allow us to create sets of named constants. The default enum will
        index entries like an array, though as a dictionary. This can be
        overridden however.
        {"enum friends { bff: 'Louis', boss: 'Ben' }"}
        {"friends.bff => 'Louis'"}
      </Text>
      <Heading>What is typeof?</Heading>
      <Text>
        The typef operator returns a string declaring the type of the target
        variable or object.
      </Text>
    </Layout>
  );
}
