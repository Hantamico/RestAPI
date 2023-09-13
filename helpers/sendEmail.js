const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'k.a.galagan@student.khai.edu',
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (address, verificationToken) => {
  const email = {
    to: address,
    from: 'k.a.galagan@student.khai.edu',
    subject: 'Verify your e-mail',
    html: `<p>You have registered on our website. Please verify your email following the 
  link belove </br> <a href="http://127.0.0.1/api/users/verify/${verificationToken}/" target="_blank">
  Click here</a></p>`,
  };

  await transport.sendMail(email);
};

module.exports = sendEmail;