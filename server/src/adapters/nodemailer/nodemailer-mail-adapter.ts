import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 2525,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {   
    await transport.sendMail({
      from: process.env.FROM_USER,
      to: process.env.TO_USER,
      subject,
      html: body,
    }); 
  }
}