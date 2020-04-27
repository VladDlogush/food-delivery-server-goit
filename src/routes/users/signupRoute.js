const fs = require("fs");

const singupRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";
    request.on("data", (data) => {
      body += data;
      const writeStream = fs.createWriteStream(
        "../food-delivery-server-goit/src/db/users" +
          `/${JSON.parse(body).username}.json`
      );
      writeStream.write(body);
      writeStream.end();
    });

    request.on("end", () => {
      response.writeHead(200, {
        "Content-Type": "text/json",
      });
      response.write(
        `{
            "status": "success",
            "user": ${body},
        }`
      );
      response.end();
    });

    return;
  }

  response.write("<h1>405 Method Not Allowed</h1>");
  response.end();
};

module.exports = singupRoute;
