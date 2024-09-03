import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
