const axios = require("axios");
const express = require("express");
const app = express();
const port = 7777;

// Enable body-parse json
app.use(express.json());

// Connect database
const mongoose = require("mongoose");
const db_url =
  "mongodb://root:password@localhost:27017/orders?authSource=admin";
const db_option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(db_url, db_option, () =>
  console.log("Database is connected - Orders")
);

// Routes
const {
  addOrder,
  getOrderById,
  removeOrderById,
  endPoint,
} = require("./orders.controller");
const { validateOrder } = require("./validate-body");

app.get("/", endPoint);
app.post("/order", validateOrder, addOrder);
app.get("/order/:id", getOrderById);
app.delete("/order/:id", removeOrderById);

app.listen(port, () => console.log("This order service is running"));
