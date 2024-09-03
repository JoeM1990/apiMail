import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {

    constructor(private mailerService: MailerService, private config: ConfigService) { }

    async sendUserWelcome(user: User, token: string) {

        const confirmation_url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            from: this.config.get('MAIL_HOST'),
            subject: 'Welcome',
            template: './welcome',
            context: {
                name: user.name,
                confirmation_url,
            },
        });
    }

    async sendMail(data:any) {

        await this.mailerService.sendMail({
            to: data.to,
            from: data.from,
            subject: data.subject,
            text: data.content
            // template: content,

        });
    }

    async sendMailMultiple(to: any, from: string, subject: string, content: string) {

        for (var i = 1; i <= to.length; i++) {
            await this.mailerService.sendMail({
                to: to[i],
                from: from,
                subject: subject,
                text: content
                // template: content,

            });
        }

    }


}
