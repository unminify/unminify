const esprima = require("esprima");
const escodegen = require("escodegen");

function unminify(source) {
  return escodegen.generate(
    esprima.parse(source)
  )
}
module.exports = unminify;
