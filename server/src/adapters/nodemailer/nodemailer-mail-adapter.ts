import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31a4097d5ab517",
    pass: "4474fa8328cce2"
  }
});

/*const transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "meo.atendimento@outlook.com",
    pass: "Amazonas@42349203492034920492",
  },
  tls: {
    rejectUnauthorized: false
  }
});*/

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {   
    await transport.sendMail({
      from: 'Meo Atendimento <meo.atendimento@outlook.com>',
      to: 'Silas Martins <silas.martins2041@gmail.com>',
      subject,
      html: body,
    }); 
  }
}