const express = require('express');
const bodyParser = require("body-parser");
require ('./database/mongoose');
const cors = require('cors');
//declaring dotenv inorder to read .env file necessary for token gen
const dotenv = require('dotenv').config();

const app = express();
const user = require('./routers/userrouter');
const product = require('./routers/productrouter');
const userrequests = require('./routers/userrequestrouter');
const cart = require('./routers/cartrouter');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(user);
app.use(product);
app.use(userrequests);
app.use(cart);

app.get("/", (req, res) => {
    res.send({ message: "Welcome" });
  }) 

app.listen(4000);