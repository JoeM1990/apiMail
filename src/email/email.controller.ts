import { Body, Controller, Post, Req } from '@nestjs/common';
import { EmailService } from './email.service';



@Controller('mail')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/single')
  sendMail(@Req() req:Request): Promise<void> {
    return this.emailService.sendMail(req.body);
  }

  @Post('/multiple')
  sendMailMultiple(@Req() req:Request): Promise<void> {
    return this.emailService.sendMail(req.body);
  }
}
