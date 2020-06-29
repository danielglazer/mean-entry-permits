import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserRole } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async create(@Body() createUserDto: User) {
    this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query('role') role: UserRole) { // todo: maybe also add compound id to get all branches users
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: User) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}
