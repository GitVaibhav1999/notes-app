const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)
data.name = 'Vaibhav Gautam'
data.age = 20

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)

