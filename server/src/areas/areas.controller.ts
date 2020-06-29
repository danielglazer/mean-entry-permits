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
import { AreasService } from './areas.service';
import { Area } from './area.interface';

@Controller('areas')
export class AreasController {
  constructor(private _areasService: AreasService) {}
  @Post()
  async create(@Body() createAreaDto: Area) {
    this._areasService.create(createAreaDto);
  }

  @Get()
  async findAll(
    @Optional() @Query('parentAreaId') parentAreaId: number,
    @Optional() @Query('managerId') managerId: string,
  ) {
    return this._areasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return `This action returns a #${id} area`;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAreaDto: Area) {
    return `This action updates a #${id} area`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} area`;
  }
}
