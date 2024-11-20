
const fs = require('fs')

//reading a file text

const readText = fs.readFileSync('./texts/read.txt', 'utf-8')
console.log(readText)

//writing a file text
const writtenText = fs.writeFileSync('./texts/write.txt', readText   + 'This is a text')
