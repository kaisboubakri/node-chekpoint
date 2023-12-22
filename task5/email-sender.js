const nodemailer = require('nodemailer');

const senderEmail = 'your_email@example.com';
const receiverEmail = 'your_email@example.com'; // Your own email address
const smtpConfig = {
  host: 'smtp.your-email-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

const mailOptions = {
  from: senderEmail,
  to: receiverEmail,
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});
