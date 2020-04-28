const products = require("../../db/products/all-products.json");
const qs = require("qs");

const productIds = (request, response) => {
  const parsedUrl = qs.parse(request.url);
  const valueIds = Object.values(parsedUrl)[0];
  const lastIndex = valueIds.lastIndexOf("'");
  const firstIndex = valueIds.indexOf("'");
  const arrOfIds = valueIds.slice(firstIndex + 1, lastIndex).split(",");

  let arrOfProducts = [];
  let responseObj;

  arrOfIds.map((id) => {
    const product = products.find((product) => product.id === +id);
    if (product) {
      const obj = {
        id: product.id,
        sku: product.sku,
        name: product.name,
        description: product.description,
      };
      arrOfProducts.push(obj);
    }
  });

  if (arrOfProducts.length !== 0) {
    responseObj = {
      status: "success",
      products: arrOfProducts,
    };
  } else if (arrOfProducts.length === 0) {
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

module.exports = productIds;
