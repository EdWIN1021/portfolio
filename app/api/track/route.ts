import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });

  const res = await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Notification",
    html: `<div>someone just access your website</div>`,
  });

  if (res) {
    return NextResponse.json(
      {
        message: "message sent",
      },
      {
        status: 200,
      }
    );
  }
}
