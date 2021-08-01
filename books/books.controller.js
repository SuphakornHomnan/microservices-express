const Book = require("./books.model");

module.exports = {
  getBooks: async (req, res) => {
    try {
      const books = await Book.find();
      return res.json(books);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      return res.json(book);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },

  addBook: async (req, res) => {
    try {
      const { title, author, numberPages, publisher } = req.body;
      const newBook = {
        title,
        author,
        numberPages,
        publisher,
      };

      const book = new Book(newBook);
      await book.save();
      return res.send("add new book success");
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },

  removeBookById: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      return res.send(`Remove ${req.params.id} success!`);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
