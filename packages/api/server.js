const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 8080;

let server = http.createServer(function(req, res, next) {
  let { pathname } = url.parse(req.url);
  let functionName = pathname.substring(1);

  try {
    let middlewareFunction = require(`./${functionName}/index.js`);
    console.log("Handle request:", req.url);
    return middlewareFunction(req, res, next);
  } catch (e) {
    res.statusCode = 404;
    res.end("Function not defined.");
  }
});

server.listen(PORT);
console.log(`Server Started: http://localhost:${PORT}`);
