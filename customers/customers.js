const express = require("express");
const app = express();
const port = 5555;

// Enable body-parse json
app.use(express.json());

// Connect database
const mongoose = require("mongoose");
const db_url = "mongodb://root:password@localhost:27017/customers?authSource=admin";
const db_option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(db_url, db_option, () => console.log("Database is connected - Customers"));

// Routes
const { addCustomer, getCustomers, getCustomerById, removeCustomerById } = require('./customers.controller')
const { validateCustomer } = require('./validate-body')

app.get("/", (req, res) => {
  return res.send("This is customer service!!");
});
app.post("/customer", validateCustomer ,addCustomer);
app.get("/customers", getCustomers);
app.get("/customer/:id", getCustomerById);
app.delete("/customer/:id", removeCustomerById);

// Launch server
app.listen(port, () => console.log("Customers service is running"));
