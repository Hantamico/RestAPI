const User = require("../../models/users");
const { sendEmail } = require("../../helpers");
const { v4: uuid } = require("uuid");
require("dotenv").config();



const resendEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }
    if (user.verify) {
      res.status(400).json({ message: "Verification has already been passed" });
      return;
    }

    const verificationToken = user.verificationToken;
    
    await sendEmail(email, verificationToken);

    res.json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendEmail;