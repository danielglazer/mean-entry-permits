import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EntryPermitsModule } from './entry-permits/entry-permits.module';

@Module({
  imports: [UsersModule, EntryPermitsModule],
})
export class AppModule {}
