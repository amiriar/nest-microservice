import { Body, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/CreateUser.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.create')
  @ApiOperation({ summary: 'Create a new user' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(
      createUserDto.name,
      createUserDto.email,
      createUserDto.age,
    );
  }

  @MessagePattern('users.getAll')
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async getAllUsers() {
    return this.usersService.findAllUsers();
  }
}
