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
      <Heading>Explain How `this` Works in Javascript</Heading>
      <Text>
        `this` is a keyword similar to `self` in python, particularly when
        working with classes and functions. Generally, `this` refers to the
        parent class when within the confines of a method. `this` can also refer
        to the global object when used in a freely invoked function. If in
        strict mode (generally applied to React apps in CRA), `this` will be
        undefined. For arrow functions, `this` inherits its value from the
        surrounding scope.
      </Text>
      <Heading>Why is this IIFE Broken? `function foo(){}();`</Heading>
      <Text>
        The above IIFE is simply invoked incorrectly. It should be `(function
        foo(){})();` An IIFE is an Immediately Invoked Function Expression. Use
        of IIFEs reduces crowding of the global scope.
      </Text>
      <Heading>
        What's the difference between a variable that is: null, undefined or
        undeclared?
      </Heading>
      <Text>
        A variable that is declared can be null or undefined. Undefined
        indicates that a variable has been declared but that it hasn't been
        given a value. A variable can be assigned `null`, which is a value, but
        acts as a non-value. Undeclared means the variable was never declared,
        or created. Variables in JS can be declared with `var`, `let`, or
        `const`. `var` is typically seen in older applications or pure JS. In
        React and functional programming, `const` is highly preferred. Using
        `let` is more resource intensive, but allows reassignment of the
        variable.
      </Text>
      <Heading>What is a closure, and how/why would you use one?</Heading>
      <Text>
        A closure represents an isolating of scope for functions. A function has
        access to variables declared outside its scope. A closure refures to a
        function bundled/enclosed with some variables outside the function
        (lexical environment). Consider this example:
        {"function makeAdder(x) {"}
        {"  return function (y) {"}
        {"    return x + y;"}
        {"  }"}
        {"}"}
        When you call makeAdder(), a function is returned. However, this new
        function "remembers" the variable x that was passed in, even though the
        entity of the function is just {"function(y) {return x + y}"}.
      </Text>
    </Layout>
  );
}
