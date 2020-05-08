module.exports = {
  SAP_UI_DEFINE:
    'ExpressionStatement CallExpression' +
      '[callee.property.name=define]' +
      '[callee.type=MemberExpression]' +
      '[callee.object.type=MemberExpression]' +
      '[callee.object.property.name=ui]' +
      '[callee.object.object.type=Identifier]' +
      '[callee.object.object.name=sap]'
};
