module.exports = function(app) {
  var fs = require("fs");

  app.get("/products", (req, res) => {
    fs.readFile("./app/routes/test.json", (err, data) => {
      if (err) throw err;
      let products = JSON.parse(data);
      res.json(products);
    });
  });

  app.post("/products", (req, res) => {
    fs.readFile("./app/routes/test.json", (err, data) => {
      if (err) throw err;
      let productsData = JSON.parse(data);
      productsData.borek.push(req.body);
      fs.writeFile("./app/src/routes/test.json", JSON.stringify(productsData));
      res.send("product added");
    });
  });
};
