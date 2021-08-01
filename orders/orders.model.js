const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerID: {
      type: mongoose.SchemaTypes.ObjectId,
      require: true,
    },
    bookID: {
      type: mongoose.SchemaTypes.ObjectId,
      require: true,
    },
    initialDate: {
      type: Date,
      require: true,
    },
    deliveryDate: {
      type: Date,
      require: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("orders", orderSchema);
