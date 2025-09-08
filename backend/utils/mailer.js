import nodemailer from "nodemailer";

export const sendBookingMail = async (to, subject, text, html) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail", // ya SMTP ka config
      auth: {
        user: process.env.EMAIL_USER,  // apna email
        pass: process.env.EMAIL_PASS   // app password
      },
    });

    await transporter.sendMail({
      from: `"MEHMAN - AIRBNB" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("📧 Booking confirmation mail sent to:", to);
  } catch (error) {
    console.error("❌ Mail error:", error);
  }
};
