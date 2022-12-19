import { MailAdapter, SendMailData } from "../mail-adapter";
export declare class NodemailerMailAdapter implements MailAdapter {
    sendMail({ subject, body }: SendMailData): Promise<void>;
}
