module.exports = {
  db_option: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  db_book_url: "mongodb://root:password@localhost:27017/books?authSource=admin",
  db_customer_url: "mongodb://root:password@localhost:27017/customers?authSource=admin",
  db_order_url: "mongodb://root:password@localhost:27017/orders?authSource=admin"
};
