import nodemailer from "nodemailer";

const email = "jose.rotchen14@gmail.com";
const pass = "vndo oryp wycq ieii";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
  subject: "Reserve",
};
