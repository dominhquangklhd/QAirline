const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendEmailNotification(ticketCode, customerName, email) {
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

  const letter = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your Ticket Confirmation",
    text: `Dear ${customerName},\n\nThank you for booking with us. Your ticket code is: ${ticketCode}.\nPlease keep this code for your reference.\n\nBest regards,\nThe Booking Team`,
  };

  try {
    await transporter.sendMail(letter);
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
    console.log(
      "Failed to send email. The code is implemented in monitor/sidecar/emailNotification.js"
    );
  }
}

module.exports = sendEmailNotification;
