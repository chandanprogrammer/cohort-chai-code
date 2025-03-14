import nodemailer from "nodemailer";

const emailSender = async (email, subject, message) => {
  let transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.MAILTRAP_USER, // sender address
    to: email, // list of receivers
    subject: subject,
    text: message, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  // console.log("Message sent:", info.messageId);
  return info;
};

export default emailSender;
