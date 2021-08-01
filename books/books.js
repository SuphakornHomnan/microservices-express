const express = require("express");
const app = express();
const port = 4545;

// Enable body-parse json
app.use(express.json());

// Connect database
const mongoose = require("mongoose");
const db_url = "mongodb://root:password@localhost:27017/books?authSource=admin";
const db_option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(db_url, db_option, () =>
  console.log("Database is connected - Books")
);

// Routes
const {
  getBooks,
  getBookById,
  addBook,
  removeBookById,
} = require("./books.controller");
const { validateBook } = require("./validate-body");

app.get("/", (req, res) => {
  return res.send("This is book service!!");
});
app.get("/books", getBooks);
app.get("/book/:id", getBookById);
app.post("/book", validateBook, addBook);
app.delete("/book/:id", removeBookById);

// Launch server
app.listen(port, () => console.log("Book Server is running"));
