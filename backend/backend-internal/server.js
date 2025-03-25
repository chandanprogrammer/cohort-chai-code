const http = require("http");

function handlerFunction(req, res) {
  console.log("Incoming Request Aaya...");
  console.log(req.method);
  console.log(req.url);

  switch (req.method) {
    case "GET":
      {
        if (req.url === "/") return res.end("Home Page");
        if (req.url === "/contact-us") return res.end("Contact Page");
        if (req.url === "/about-us") return res.end("About Page");
      }
      break;

    case "POST":
      {
        res.end("ye lo ji response");
      }
      break;
  }
}

const server = http.createServer(handlerFunction);

server.listen(5000, function () {
  console.log("server listern on port 5000");
});

// curl http://localhost:5000
// curl -X POST http://localhost:5000



// const express = require('express');

// const app = express();

// app.use((req, res, next)=>{
//     next();
// });

// app.get('/', (req, res)=> res.end('Home Page'));
// app.get('/contact-us', (req, res)=> res.end('Contact Page'));
// app.get('/about-us', (req, res)=> res.end('About Page'));

// app.listen(7000, ()=>{
//     console.log("server listern on port 7000");
// })



// https://koajs.com/ 
// https://fastify.dev/


// can you create a basic express GET / POST -- by using req.method and req.url (node) | magical layer

// pattern matching feature

// cohortjsexpress pure apna language me likhe