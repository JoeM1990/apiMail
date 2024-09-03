import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { ConfigService } from '@nestjs/config';
import { Email } from 'src/entity/email.entity';

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

    async sendMail(res:Email) {

        await this.mailerService.sendMail({
            to: res.to,
            from: res.from,
            subject: res.subject,
            text: res.content
        });
    }

    async sendMailMultiple(res:Email) {

        for (var i = 1; i <= res.to.length; i++) {
            await this.mailerService.sendMail({
                to: res.to[i],
                from: res.from,
                subject: res.subject,
                text: res.content
            });
        }

    }


}
