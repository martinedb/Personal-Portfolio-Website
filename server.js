const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.')); // Serve static files from current directory

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields.'
    });
  }

  // Email validation
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address.'
    });
  }

  try {
    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
        pass: process.env.EMAIL_PASS || 'your-app-password'     // Replace with your app password
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'edwinibon90210@gmail.com', // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #9f7aea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #9f7aea; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio website contact form.</p>
          </footer>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation to the sender
    const confirmationOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting Martin Edwini-Bonsu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #9f7aea; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I've received your message with the subject "<strong>${subject}</strong>" and will get back to you as soon as possible.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4>Your Message:</h4>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>Martin Edwini-Bonsu</p>
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This is an automated confirmation. Please do not reply to this email.</p>
          </footer>
        </div>
      `
    };

    await transporter.sendMail(confirmationOptions);

    res.json({
      success: true,
      message: 'Thank you! Your message was received. I will try to get back to you as soon as possible.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'There was an error sending your message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view your portfolio`);
});
