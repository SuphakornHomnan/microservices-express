module.exports = {
  validateCustomer: (req, res, next) => {
    const Authorize =
      req.body.name && req.body.age && req.body.age > 0 && req.body.address;

    if (Authorize) {
      return next();
    }
    
    return res
      .status(400)
      .json({ msg: "Please correct to fill your information!" });
  },
};
