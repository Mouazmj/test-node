const http = require('http')
const tasks = require('./tasks')
const fs = require('fs')

const server = http.createServer((req, res) => {
if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html'});

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.end(data)
        }
    })
} else {
    res.writeHead(404, { 'Content-Type': 'text/html'})
    res.end()
}
})

server.listen(3000, 'localhost', () => {
    console.log('Server running on port 3000!')
})