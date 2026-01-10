const http = require('http')
const tasks = require('./tasks')
const fs = require('fs')

const server = http.createServer((req, res) => {

})

server.listen(3000, 'localhost', () => {
    console.log('Server running on port 3000!')
})