const User = require("../../models/users");
require("dotenv").config();

const sendEmail = require('../../helpers/sendEmail');


const resendEmail = async (req, res, next) => {
 const { email } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    res.status(404).json({
        message: "User not found",
      });
  }
  if (user.verify) {
    res.status(400).json({ message: 'Verification has already been passed' });
  }
  await sendEmail(email, user.verificationToken);
  res.status(200).json({ message: `Verification email sent` });
};

module.exports = resendEmail;