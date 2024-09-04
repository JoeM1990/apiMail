import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class EmailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('from') from: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
    
  ) {
    return this.mailService.sendMail(to, from, subject, text);
  }
}
