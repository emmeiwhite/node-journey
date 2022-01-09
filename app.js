// http module to create our own server

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`<h1> Welcome to the Home Page </h1>`);
        res.end();
    }else if(req.url === '/about'){
        res.write(`<h1> About Page </h1>
           <p> We help people and improve their lives by providing them free Education</p>
        `);
        res.end();
    }else {
        res.write(`
        <h1> OOPS !!!</h1>
        <p> You are looking for a wrong page </p>
  
        <button> <a href="/">Back to Home</a> </button>
      `);
      res.end();
    }
});

server.listen(5000);