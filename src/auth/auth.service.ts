

import { Injectable } from '@nestjs/common';
import { EmailService } from './../email/email.service';
import { User } from '../entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private emailService: EmailService) {}

  async signUp(user: User) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    await this.emailService.sendUserWelcome(user, token);
  }
}
