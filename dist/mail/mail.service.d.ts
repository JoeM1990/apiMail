import { ConfigService } from '@nestjs/config';
export declare class MailService {
    private config;
    private transporter;
    constructor(config: ConfigService);
    sendMail(to: string, fromName: string, subject: string, text: string): Promise<any>;
    sendMailMultiple(to: string[], fromName: string, subject: string, text: string): Promise<any>;
}
