import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { EmailModule } from './email/email.module';
import { AuthService } from './auth.service';

@Module({
  imports: [EmailModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
