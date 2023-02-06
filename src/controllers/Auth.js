const ErrorResponse = require("../utils/errorResponse");
const asyncWrap = require("express-async-wrap");
const {
  verifyPassword,
  getUserByFilter,
  createUser
} = require("../repositories/MONGO/Users");
const jwt = require("jsonwebtoken");

exports.login = asyncWrap(async (req, res, next) => {
  const { email, password } = req.body;
  const isVerified = await verifyPassword(email, password);
  if (!isVerified) {
    return next(new ErrorResponse(`Email and password don't match`, 401));
  }

  const user = await getUserByFilter({ email });
  console.log(user);
  const token = jwt.sign(user, process.env.TOKEN_KEY, { algorithm: "HS256" });
  res.status(200).json({
    seccuse: true,
    data: { user, token }
  });
});

exports.signUp = asyncWrap(async (req, res, next) => {
  const { email, password, first_name, last_name } = req.body;
  const isEmailTaken = !!(await getUserByFilter({ email }));

  if (isEmailTaken) {
    return next(new ErrorResponse(`This email is already taken`, 409));
  }

  const user = await createUser({ email, password, first_name, last_name });
  const token = jwt.sign(user, process.env.TOKEN_KEY, {
    algorithm: "HS256"
  });
  res.status(200).json({
    seccuse: true,
    data: { user, token }
  });
});
