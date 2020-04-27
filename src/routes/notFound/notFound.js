const notFoundRoute = (req, res) => {
  res.writeHead(404, {
    "Content-Type": "text/html",
  });
  res.write("<h1>404 Not found</h1>");
  res.end();
};

module.exports = notFoundRoute;
