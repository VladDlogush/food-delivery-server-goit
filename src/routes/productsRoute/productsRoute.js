const getAllProducts = require("./products");
const findProductsByIds = require("./productsByIds");
const findProductsByCategory = require("./productsByCategory");
const findProductById = require("./productById");

const productsRoute = (request, response) => {
  if (request.method === "GET" && request.url === "/products") {
    getAllProducts(request, response);
    return;
  }

  if (request.method === "GET" && request.url.includes("ids")) {
    findProductsByIds(request, response);
    return;
  }

  if (request.method === "GET" && request.url.includes("category")) {
    findProductsByCategory(request, response);
    return;
  }

  if (request.method === "GET" && request.url.lastIndexOf("/") !== 0) {
    findProductById(request, response);
    return;
  }

  response.writeHead(405, {
    "Content-Type": "text/html",
  });
  response.write("<h1>405 Method Not Allowed</h1>");
  response.end();
};

module.exports = productsRoute;
