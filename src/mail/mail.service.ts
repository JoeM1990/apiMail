import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {

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

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'your-email@gmail.com',
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