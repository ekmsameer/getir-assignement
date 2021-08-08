
require("@babel/register")({
  presets: ["@babel/preset-env", ]
});
//CALL PACKAGES
const express = require('express');
const app = express();
const db = require('./models/db');
const Router = require('./routes');
//RUN SERVER ON PORT 3000
const port = process.env.PORT || 3000;

//setup /api as root route
app.use('/', Router);

//RUN SERVER ON PORT 3000
app.listen(port);
console.log("Running server on port " + port);
