import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Optional,
} from '@nestjs/common';
import { EntryPermit } from './entry-permits.interface';
import { EntryPermitsService } from './entry-permits.service';

@Controller('entry-permits')
export class EntryPermitsController {
  constructor(private entryPermitsService: EntryPermitsService) {}
  @Post()
  async create(@Body() createEntryPermitDto: EntryPermit) {
    this.entryPermitsService.create(createEntryPermitDto);
  }

  @Get()
  async findAll(
    @Optional() @Query('guestId') guestId: string,
    @Optional() @Query('branchId') branchId: string,
  ) {
    return this.entryPermitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return `This action returns a #${id} entry-permit`;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: EntryPermit) {
    return `This action updates a #${id} entry-permit`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} entry-permit`;
  }
}
