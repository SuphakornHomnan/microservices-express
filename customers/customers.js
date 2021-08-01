const express = require("express");
const app = express();
const port = 5555;

// Enable body-parse json
app.use(express.json());

// Connect database
const mongoose = require("mongoose");
const { db_customer_url, db_option } = require("../utils/db-config");
mongoose.connect(db_customer_url, db_option, () =>
  console.log("Database is connected - Customers")
);

// Routes
const {
  endPoint,
  addCustomer,
  getCustomers,
  getCustomerById,
  removeCustomerById,
} = require("./customers.controller");
const { validateCustomer } = require("./validate-body");

app.get("/", endPoint);
app.post("/customer", validateCustomer, addCustomer);
app.get("/customers", getCustomers);
app.get("/customer/:id", getCustomerById);
app.delete("/customer/:id", removeCustomerById);

// Launch server
app.listen(port, () => console.log("Customers service is running"));
