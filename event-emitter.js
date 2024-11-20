const EventEmitter = require('events')
const myEmitter = new EventEmitter()

// Event listener

myEmitter.on('myEvent', (data) => {
  console.log('Event triggered:', data)
})

myEmitter.on('myEvent', (data) => {
    console.log('Another event triggered:', data)
})

// Emitting event  

myEmitter.emit('myEvent', 'Hello, World!')