const http = require('http');

//this is one way
// function reqListener(req, res){};
// http.createServer(reqListener);

//another way to create server - using arrow function
const server = http.createServer((req, res)=> {
    //console.log(req.url, req.method, req.headers);
    const url = req.url;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message!!!</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from Node js server.</h1></body>');
    res.write('</html>');
    res.end();
    


});

server.listen(3000);