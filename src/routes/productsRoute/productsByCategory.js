const products = require("../../db/products/all-products.json");
const qs = require("qs");

const productsCategory = (request, response) => {
  const parsedUrl = qs.parse(request.url);
  const valueCategory = Object.values(parsedUrl)[0];
  const lastIndex = valueCategory.lastIndexOf('"');
  const firstIndex = valueCategory.indexOf('"');
  const category = valueCategory.slice(firstIndex + 1, lastIndex);

  const filteredProducts = products.filter(
    (prod) => prod.categories[0] === category
  );

  let responseObj;

  if (filteredProducts.length !== 0) {
    responseObj = {
      status: "success",
      products: filteredProducts,
    };
  } else if (filteredProducts.length === 0) {
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

module.exports = productsCategory;
