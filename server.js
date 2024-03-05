// Import http 
const http = require('http');

// Import the express app
const app = require('./app');

// Set the port of the server
app.set('port', process.env.PORT || 3000);

// Create a simple server which execute the express app
const server = http.createServer(app);

// Listen to the server
server.listen(process.env.PORT || 3000);