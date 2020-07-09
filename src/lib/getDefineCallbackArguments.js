'use strict'

module.exports = function (node) {
  const args = node.arguments;
  for (let i = args.length - 1; i >= 0; i--) {
    const arg = args[i];
    console.log(arg);
    if (arg.type === "FunctionExpression") {
      return arg;
    }
  }
  throw new Error("Could not find callback argument for node:\n" + JSON.stringify(node, null, 2));
}
