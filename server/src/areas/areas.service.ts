import { Injectable } from '@nestjs/common';
import { Area } from './area.interface';

@Injectable()
export class AreasService {
  private readonly _areas: Area[] = [];

  async create(cat: Area) {
    this._areas.push(cat);
  }

  async findAll() {
    return this._areas;
  }

  async get(id: string) {}
  async update(id: string) {}
  async delete(id: string) {}
}
