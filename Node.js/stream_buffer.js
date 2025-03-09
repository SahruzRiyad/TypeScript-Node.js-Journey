const http = require('http')
const fs = require('fs')

// Creating server
const server = http.createServer()

// listener

server.on('request', (req, res)=> {
    if( req.url === '/read-file' && req.method === 'GET'){
        //Streaming
        
        const readableStream = fs.createReadStream( __dirname + "/textFile/readW.txt" )

        readableStream.on('data', (buffer) => {
            res.write(buffer)
        })
    
        readableStream.on('end',() => {
            res.statusCode = 200
            res.end("Buffer Streaming successfuly end!!")
        })

        readableStream.on('error', (err) => {
            console.log(err)

            res.statusCode = 500
            res.end("Something went wrong !!! ")
        })
    }

    else 
        res.end("Welcome to Server !!!")
})

server.listen(5000,() => {
    console.log("Server is listening from port: 5000 !!")
})