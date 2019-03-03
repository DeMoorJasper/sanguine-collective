const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const functions = ["artists", "fanlink", "fanlinks", "fanlinkredirect"];

for (let func of functions) {
  let middlewareFunction = require(`./${func}/index.js`);

  app.use(`/${func}`, middlewareFunction);

  console.log("Registered endpoint:", `/${func}`);
}

app.use("/", (req, res) => res.end(`functions: ${JSON.stringify(functions)}`));

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
