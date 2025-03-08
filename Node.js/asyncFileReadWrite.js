const fs = require('fs')

// reading text asysnchronously
fs.readFile("./textFile/read.txt", 'utf-8',(err, data) => {
    if (err){
        throw Error ('Error in reading text')
    }


    // writing text asynchronously
    fs.writeFile("./textFile/write2.txt","utf-8", (err) => {
        if(err){
            throw Error('Error writing data')
        }
    })
})

console.log("Testing asynchroous")