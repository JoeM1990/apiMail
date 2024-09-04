import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('email')
export class EmailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
  ) {
    return this.emailService.sendMail(to, subject, text);
  }
}
