import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mail: string = process.env.MAIL || '';
const pass: string = process.env.MAIL_PASS || '';
const host: string = process.env.MAIL_HOST || '';
const port: number = parseInt(process.env.MAIL_PORT || '465', 10);
const secure: boolean = process.env.MAIL_SECURE === 'true';
const transporter = nodemailer.createTransport({
  host: host, 
  port: port,
  secure: secure,
  auth: {
    user: mail,
    pass: pass,
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    const info = await transporter.sendMail({
      from: '"Your Name" <server@marosik.sk>',
      to,
      subject,
      text,
    });
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
