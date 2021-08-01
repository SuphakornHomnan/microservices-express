const Customer = require("./customers.model");

module.exports = {
  endPoint: (req, res) => {
    return res.send("This is customer service!!");
  },
  addCustomer: async (req, res) => {
    try {
      const { name, age, address } = req.body;
      const newCustomer = {
        name,
        age,
        address,
      };

      const customer = new Customer(newCustomer);
      await customer.save();
      return res.send("add new customer success");
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  getCustomers: async (req, res) => {
    try {
      const customers = await Customer.find();
      return res.json(customers);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  getCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (customer) {
        return res.json(customer);
      }
      return res.status(404).json({ msg: "It wrong id!!" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  removeCustomerById: async (req, res) => {
    try {
      await Customer.findByIdAndRemove(req.params.id);
      return res.send(`This ${req.params.id} is removed!`);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
