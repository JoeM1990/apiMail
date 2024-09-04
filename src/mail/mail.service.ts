import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {

  private transporter;

  constructor(private config:ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: config.get('SMTP_SERVICE'),
      auth: {
        user: config.get('SMTP_USERNAME'), 
        pass: config.get('SMTP_PASSWORD'), 
      },
    });
  }

  async sendMail(to: string, fromName: string, subject: string, text: string, ) {
    const mailOptions = {
      from: `"${fromName}" "${this.config.get('SMTP_USERNAME')}"`,
      to,
      subject,
      text,
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log(`Email sent: ${result.response}`);
      return result;
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      throw error;
    }
  }
}
