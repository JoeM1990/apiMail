import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendEmail(to: string, fromName: string, subject: string, text: string): Promise<any>;
    sendEmailMultiple(to: string[], fromName: string, subject: string, text: string): Promise<any>;
}
