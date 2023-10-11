import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, info } = await request.json();

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
    subject: "info",
    html: `
            <div>name: ${name}</div>
            <br/>
            <div>name: ${email}</div>
            <br/>
            <p>${info}</p>

          `,
  });

  if (res) {
    return NextResponse.json(
      {
        message: "email sent",
      },
      {
        status: 200,
      }
    );
  }
}
