//local modules
const {a, add} = require('./local-1')
const {a : a2, add: add2} = require('./local-2')

console.log(add(2,3))

//built-in modules
const path = require("path")

console.log(path.dirname("/C:/Level-2/learning-node/index.js"))
console.log(path.parse("/C:/Level-2/learning-node/index.js"))