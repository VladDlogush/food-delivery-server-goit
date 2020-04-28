const products = require("../../db/products/all-products.json");

const productId = (request, response) => {
  const lastIndex = request.url.lastIndexOf("/") + 1;
  const id = +request.url.slice(lastIndex);
  const foundProduct = products.find((prod) => prod.id === id);

  let responseObj;

  if (foundProduct.length !== 0) {
    responseObj = {
      status: "success",
      products: foundProduct,
    };
  } else {
    responseObj = {
      status: "no products",
      products: [],
    };
  }

  response.writeHead(200, {
    "Content-Type": "text/json",
  });
  response.write(JSON.stringify(responseObj));
  response.end();
};

module.exports = productId;
