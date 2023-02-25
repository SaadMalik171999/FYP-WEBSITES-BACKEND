const express = require("express");
const productListOneRouters = require("./routes/productListOneRouters")
const foodigoRoute = require("./routes/FoodigoRoute")
const gfreshRoute = require("./routes/GfreshRoute")
const groceteriaRoute = require("./routes/GroceteriaRoute")
const ScrapRoute = require("./routes/ScrapRoute")
const cors = require('cors');
const fs = require("fs");
const path = require("path");

require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(productListOneRouters);
app.use(foodigoRoute);
app.use(gfreshRoute);
app.use(groceteriaRoute);
app.use(ScrapRoute);

app.listen(port, () => {
    console.log(`Connection is ${port}`);
  });
  

  
  