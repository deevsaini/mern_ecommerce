//creating token and saving in cookie
const SendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //options for cookie

  const options = {
    httpOnly: true,
    maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    // maxAge: 342343,
  };
  user = { ...user._doc, token };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ succes: true, data: user });
};

module.exports = SendToken;
