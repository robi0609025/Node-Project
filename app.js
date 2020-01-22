const http = require('http');

//this is one way
// function reqListener(req, res){};
// http.createServer(reqListener);

//another way to create server - using arrow function
const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);
    //process.exit();  //to shut down the listener

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from Node js server.</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);