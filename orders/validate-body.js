module.exports = {
  validateOrder: (req, res, next) => {
    const Authorize =
      mongoose.Types.ObjectId.isValid(req.body.customerID) &&
      mongoose.Types.ObjectId.isValid(req.body.bookID) &&
      req.body.initialDate &&
      req.body.deliveryDate;

    if (Authorize) {
      return next();
    }
    return res.status(400).json({ msg: "Please fill correct value!" });
  },
};
