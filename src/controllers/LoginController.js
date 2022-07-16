const service = require('../services/LoginService');

const login = async (req, res, next) => {
  const { email, password, mfa } = req.body;
  await service.logIn(email,password,mfa);
  res.json({message: "POST new tea"}); // dummy function for now
};

module.exports = {login};
