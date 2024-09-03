import { Body, Controller, Post, Req } from '@nestjs/common';
import { EmailService } from './email.service';
import { Email } from 'src/entity/email.entity';



@Controller('mail')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/single')
  sendMail(@Body() res:Email): Promise<void> {
    return this.emailService.sendMail(req.body);
  }

  @Post('/multiple')
  sendMailMultiple(@Body() res:Email): Promise<void> {
    return this.emailService.sendMail(req.body);
  }
}
