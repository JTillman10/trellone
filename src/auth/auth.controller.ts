import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

import { apiPrefix } from '../config';

import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dtos/login.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller(`${apiPrefix}/auth`)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) loginDto: LoginDto) {
    return await this.authService.authenticate(loginDto);
  }

  @Post('register')
  async register(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    const password = createUserDto.password;
    const newUSer = await this.usersService.create(createUserDto);

    const userToAuthenticate: LoginDto = {
      email: createUserDto.email,
      password,
    };

    return await this.authService.authenticate(userToAuthenticate);
  }
}
