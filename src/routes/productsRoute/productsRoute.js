const fs = require("fs");

const productsRoute = (request, response) => {
  if (request.method === "GET") {
    const file = fs.readFileSync("./src/db/products/all-products.json");
    response.writeHead(200, {
      "Content-Type": "text/json",
    });
    response.write(file);
    response.end();
    return;
  }
  response.writeHead(405, {
    "Content-Type": "text/html",
  });
  response.write("<h1>405 Method Not Allowed</h1>");
  response.end();
};

module.exports = productsRoute;
