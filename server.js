// server.js - Node.js + Express backend for contact form
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, recaptcha } = req.body;
  if (!name || !email || !subject || !message) {
    return res.json({ success: false, error: 'All fields are required.' });
  }
  // TODO: Add reCAPTCHA/hCaptcha verification here

  // Configure nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.MAIL_TO || process.env.MAIL_USER,
    subject: `[Portfolio Contact] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
