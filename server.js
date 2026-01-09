const http = require('http')
const tasks = require('./tasks')

const server = http.createServer((req, res) => {
if (req.url === '/tasks' && req.method === 'Get') {
    
}
})