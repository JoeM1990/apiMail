import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Remplace par ton adresse Gmail
        pass: 'your-email-password', // Remplace par ton mot de passe ou ton mot de passe d'application
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
