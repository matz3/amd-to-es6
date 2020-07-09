const getDefineCallbackArguments = require("./getDefineCallbackArguments");

module.exports = function (node) {
  const defineCallback = getDefineCallbackArguments(node);
  return defineCallback.params.map(param => param.name).indexOf('exports') >= 0;
}
