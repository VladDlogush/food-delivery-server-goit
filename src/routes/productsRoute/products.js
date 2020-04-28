const fs = require("fs");

const getProducts = (request, response) => {
  const file = fs.readFileSync("./src/db/products/all-products.json");
  response.writeHead(200, {
    "Content-Type": "text/json",
  });
  response.write(file);
  response.end();
};

module.exports = getProducts;
