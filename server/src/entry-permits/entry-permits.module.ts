import { Module } from '@nestjs/common';
import { EntryPermitsController } from './entry-permits.controller';
import { EntryPermitsService } from './entry-permits.service';

@Module({
  controllers: [EntryPermitsController],
  providers: [EntryPermitsService],
})
export class EntryPermitsModule {}
