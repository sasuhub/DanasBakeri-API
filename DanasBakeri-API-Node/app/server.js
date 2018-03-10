const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
require("./routes/index")(app);

var server = app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
