import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 25),
});

export async function sendMail(to: string, subject: string, text: string) {
  await transporter.sendMail({
    from: 'no-reply@example.com',
    to,
    subject,
    text,
  });
}
