import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1cb64bfa531322",
    pass: "d09f4449642334"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {   
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Silas Martins <silas.martins2041@gmail.com>',
      subject,
      html: body,
    }); 
  }
}