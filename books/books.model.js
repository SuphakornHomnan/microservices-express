const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    numberPages: {
      type: Number,
      require: true,
    },
    publisher: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("books", bookSchema);
