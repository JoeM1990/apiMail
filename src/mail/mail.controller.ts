import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('fromName') fromName: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
    
  ) {
    return this.mailService.sendMail(to, fromName, subject, text);
  }

  @Post('send/multiple')
  async sendEmailMultiple(
    @Body('to') to: string[],
    @Body('fromName') fromName: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
    
  ) {
    return this.mailService.sendMailMultiple(to, fromName, subject, text);
  }
}
