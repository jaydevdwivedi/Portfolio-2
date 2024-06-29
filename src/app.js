require('./Database/config');
require('./Models/model');
const express = require('express');
const router = require('./Router/router');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use("/", router);

app.listen(PORT, ()=> console.log("Server Started... http://localhost:" + PORT));