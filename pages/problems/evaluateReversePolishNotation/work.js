/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // Relatively slow but functional solution
  const operators = ["+", "-", "*", "/"];

  let i = 2;
  while (i < tokens.length) {
    // Get an operator
    if (operators.includes(tokens[i])) {
      // Get two preceeding numbers
      const leftOperand = tokens[i - 2];
      const rightOperand = tokens[i - 1];
      // Perform operation
      const answer = evaluate(leftOperand, rightOperand, tokens[i]);
      // Replace three values with answer
      tokens = [...tokens.slice(0, i - 2), answer, ...tokens.slice(i + 1)];
      // Repeat
      i--;
    } else {
      i++;
    }
  }

  return tokens[0];
};

function evaluate(a, b, op) {
  switch (op) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
    case "*":
      return Number(a) * Number(b);
    case "/":
      return Math.trunc(Number(a) / Number(b));
  }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // Much faster stack approach
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      stack.push(Math.trunc(1 / (stack.pop() / stack.pop())));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};
