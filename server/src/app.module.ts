import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EntryPermitsModule } from './entry-permits/entry-permits.module';
import { AreasModule } from './areas/areas.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
