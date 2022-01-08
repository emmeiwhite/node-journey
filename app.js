// http module to create our own server

const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Welcome to the homepage');
    res.end();
});

server.listen(5000);