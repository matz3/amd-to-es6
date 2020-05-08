module.exports = function (node) {
  return node &&
    node.callee &&
    node.callee.type === 'MemberExpression' &&
    node.callee.property.name === 'define' &&
    node.arguments.length === 1 &&
    node.arguments[0].type === 'ObjectExpression'
}
