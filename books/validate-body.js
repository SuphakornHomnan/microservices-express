module.exports = {
  validateBook: (req, res, next) => {
    const Authorize =
      req.body.title &&
      req.body.author &&
      req.body.numberPages &&
      req.body.publisher &&
      req.body.numberPages > 0;

    if (Authorize) {
      return next();
    }
    return res
      .status(400)
      .json({ msg: "Please correct to fill your information!" });
  },
};
