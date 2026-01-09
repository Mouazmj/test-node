const http = require('http')
const tasks = require('./tasks')

const server = http.createServer((req, res) => {
if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks))
} else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Not Found' }))
}
})

server.listen(3000, 'localhost', () => {
    console.log('Server running on port 3000!')
})