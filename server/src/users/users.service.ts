import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { of } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async create(cat: User) {
    this.users.push(cat);
  }

  async findAll() {
    return this.users;
  }

  async get(id: string) {}
  async update(id: string) {}
  async delete(id: string) {}
}
