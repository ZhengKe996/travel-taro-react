const express = require("express");

const models = require("./models");

const app = express();

models(app);
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
