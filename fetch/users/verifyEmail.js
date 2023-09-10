const User = require("../../models/users");

const verifyEmail = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOneAndUpdate(
    { verificationToken },
    { verify: true, verificationToken: null }
  );
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.status(200).json({ message: `Verification successful` });
};

module.exports = verifyEmail;