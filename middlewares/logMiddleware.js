exports.log = (req, res, next) => {
  console.log(req.body);
  next();
};
