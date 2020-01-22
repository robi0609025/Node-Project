const http = require('http');

//this is one way
// function reqListener(req, res){};
// http.createServer(reqListener);

//another way to create server - using arrow function
const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);
    //process.exit();  //to shut down the listener
});
server.listen(3000);