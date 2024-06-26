const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.SMTP_PORT;

app.use(cors());
app.use(bodyParser.json());

// Create a test email account and transport configuration
let transporter;
nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account. " + err.message);
    return process.exit(1);
  }

  // Create a SMTP transporter object
  transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  });

  console.log("Ethereal email account created successfully!");
});

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "mehdimessaadi14@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .send({ success: false, message: "Failed to send email" });
    }

    // Preview URL for testing
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

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
