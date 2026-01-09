const http = require('http')
const tasks = require('./tasks')

const server = http.createServer((req, res) => {
if (req.url === '/tasks' && req.method === 'Get') {
    res.setHeader('Content-Type', 'application/json');
    res.write('Hello there!')
    res.end()
}
})

server.listen(3000, 'localhost', () => {
    console.log('Server running on port 3000!')
})