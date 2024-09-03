import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
//   imports: [EmailModule],
//   controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
