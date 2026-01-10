const http = require('http')
const tasks = require('./tasks')

const server = http.createServer((req, res) => {
if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('<h1>Hej det är Mouaz</h1>')
    res.end()
} else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end()
}
})

server.listen(3000, 'localhost', () => {
    console.log('Server running on port 3000!')
})