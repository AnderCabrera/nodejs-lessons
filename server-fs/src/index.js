const http = require("http");
const fs = require('fs');

const host = "localhost";
const port = process.env.PORT || 4000;



const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.writeHead(200, "Hello");
    res.end("Hello /")
  } else if (url === "/users") {
    res.writeHead(200, "OK");
    fs.readFile("../files/users.txt", "utf-8", (err, data) => {
      res.end(data.toString());
    })
  } else if (url === "/passwords") {
    res.writeHead(200, "OK");
    fs.readFile("../files/passwords.txt", "utf-8", (err, data) => {
      res.end(data.toString());
    })
  }
});

server.listen(port, host, () => {
  console.log(`server on ${host}:${port}`);
});
