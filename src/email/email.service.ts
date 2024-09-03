import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';
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

    async sendMail(to: string, content: string, subject: string) {

        await this.mailerService.sendMail({
            to: to,
            from: this.config.get('MAIL_HOST'),
            subject: subject,
            template: content,

        });
    }

    async sendMailMultiple(to:any, content: string, subject: string) {

        for (var i = 1; i <= to.length; i++) {
            await this.mailerService.sendMail({
                to: to[i],
                from: this.config.get('MAIL_HOST'),
                subject: subject,
                template: content,

            });
        }

    }


}
