const fs = require('fs')

readData = fs.readFileSync("./textFile/read.txt", "utf-8")

// console.log(readData)

writeData = fs.writeFileSync("./textFile/write.txt", readData + "This is written text")

