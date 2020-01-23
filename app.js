const http = require('http');
const routes = require('./routes');
//this is one way
// function reqListener(req, res){};
// http.createServer(reqListener);

//another way to create server - using arrow function
const server = http.createServer(routes);

server.listen(3000);