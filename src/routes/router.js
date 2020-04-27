const productsRoute = require("./productsRoute/productsRoute");
const signupRoute = require("./users/signupRoute");
const notFoundRoute = require("./notFound/notFound");

const router = {
  "/products": productsRoute,
  "/signup": signupRoute,
  default: notFoundRoute,
};

module.exports = router;
