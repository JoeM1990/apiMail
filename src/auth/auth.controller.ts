import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signUp(@Body() userDto: User): Promise<void> {
    return this.authService.signUp(userDto);
  }
}
