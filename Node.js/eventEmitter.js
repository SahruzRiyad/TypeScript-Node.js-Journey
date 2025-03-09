const Emitter = require('events')
const myEmitter = new Emitter()

// Listener
myEmitter.on("birthday", ()=>{
    console.log("HAPPY BIRTHDAY TO YOU!!!")
})

myEmitter.on("birthday", (gift)=>{
    console.log(`Please receive your the gift: ${gift} !!!`)
})

myEmitter.emit("birthday","watch")