// Import http 
const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
    res.end('Hello World!');
})

// Listen to the server
server.listen(process.env.PORT || 3000);