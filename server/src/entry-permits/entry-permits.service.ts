import { Injectable } from '@nestjs/common';
import { EntryPermit } from './entry-permits.interface';

@Injectable()
export class EntryPermitsService {
  private readonly _entryPermits: EntryPermit[] = [];

  async create(cat: EntryPermit) {
    this._entryPermits.push(cat);
  }

  async findAll() {
    return this._entryPermits;
  }

  async get(id: string) {}
  async update(id: string) {}
  async delete(id: string) {}
}
