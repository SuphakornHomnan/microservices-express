const express = require("express");
const app = express();
const port = 4545;

// Enable body-parse json
app.use(express.json());

// Connect database
const mongoose = require("mongoose");
const { db_option, db_book_url } = require('../utils/db-config')
mongoose.connect(db_book_url, db_option, () =>
  console.log("Database is connected - Books")
);

// Routes
const {
  endPoint,
  getBooks,
  getBookById,
  addBook,
  removeBookById,
} = require("./books.controller");
const { validateBook } = require("./validate-body");

app.get("/", endPoint);
app.get("/books", getBooks);
app.get("/book/:id", getBookById);
app.post("/book", validateBook, addBook);
app.delete("/book/:id", removeBookById);

// Launch server
app.listen(port, () => console.log("Book Server is running"));
