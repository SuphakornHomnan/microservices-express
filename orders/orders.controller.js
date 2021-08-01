const Order = require("./orders.model");
const axios = require("axios");

module.exports = {
  endPoint: (req, res) => {
    return res.send("This is order service!!");
  },
  addOrder: async (req, res) => {
    try {
      const { customerID, bookID, initialDate, deliveryDate } = req.body;

      const newOrder = {
        customerID,
        bookID,
        initialDate,
        deliveryDate,
      };

      const order = new Order(newOrder);
      await order.save();
      return res.status(201).send("Order is created!");
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);

      if (order) {
        const orderObj = {
          customer: "",
          book: "",
          deliveryDate: order.deliveryDate,
        };

        const customer = await axios.get(
          `http://localhost:5555/customer/${order.customerID}`
        );
        const book = await axios.get(
          `http://localhost:4545/book/${order.bookID}`
        );

        orderObj.customer = customer.data.name;
        orderObj.book = book.data.title;
        return res.json(orderObj);
      }

      return res.status(404).json({ msg: "Invalid id" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  removeOrderById: async (req, res) => {
    try {
      await Order.findByIdAndRemove(req.params.id);
      return res.send(`This ${req.params.id} is removed!`);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
