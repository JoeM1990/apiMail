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
        });
    }

    async sendMailMultiple(data:any) {

        for (var i = 1; i <= data.to.length; i++) {
            await this.mailerService.sendMail({
                to: data.to[i],
                from: data.from,
                subject: data.subject,
                text: data.content
            });
        }

    }


}
