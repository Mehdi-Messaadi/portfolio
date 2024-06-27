const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let transporter;

// Create a SMTP transporter object
transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Set this to true or false based on your SMTP configuration
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "mehdimessaadi14@gmail.com", // Replace with your email
    subject: `Portfolio Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .send({ success: false, message: "Failed to send email" });
    }

    console.log("Email sent:", info.response);

    res.send({
      success: true,
      message: "Email sent successfully",
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
