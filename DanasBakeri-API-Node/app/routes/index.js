const productRoute = require("./product_routes");

module.exports = function(app) {
  productRoute(app);
};
